// Mobile screens for Niloo — designed for ~390px iPhone frame
// Includes mHome, mPLP, mPDP, mSearch + a shared mHeader

function MHeader({ title, onMenu, onSearch, showBack, onBack, onBag }) {
  return (
    <div style={mh.bar}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
        {showBack ? (
          <button onClick={onBack} style={mh.iconBtn}><Icon name="arrow-r" /></button>
        ) : (
          <button onClick={onMenu} style={mh.iconBtn}><Icon name="menu" /></button>
        )}
        <button onClick={onSearch} style={mh.iconBtn}><Icon name="search" /></button>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        {title && <span style={{ fontSize: 13, fontWeight: 500 }}>{title}</span>}
        <NilooLogo size={30} scale={0.8} />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
        <button type="button" style={mh.iconBtn}><Icon name="user" /></button>
        <button type="button" onClick={() => onBag && onBag()} style={mh.iconBtn} aria-label="سبد خرید"><Icon name="bag" /></button>
      </div>
    </div>
  );
}
const mh = {
  bar: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 12px', borderBottom: '1px solid var(--line)', background: 'var(--paper)', position: 'sticky', top: 0, zIndex: 10 },
  iconBtn: { padding: 8, color: 'var(--ink)' },
};

// ─── MOBILE HOME ────────────────────────────────────────────────────────────
function MHome({ onProduct, onNav, onSearch }) {
  const D = window.NILOO_DATA;
  const [tab, setTab] = React.useState('زن');
  return (
    <div style={{ background: 'var(--paper)', minHeight: '100%' }}>
      <MHeader onMenu={() => onNav && onNav('plp')} onSearch={onSearch} onBag={() => onNav && onNav('cart')} />
      {/* tabs */}
      <div style={mhome.tabs}>
        {['زن', 'مرد', 'کفش و کیف'].map(t => (
          <button key={t} onClick={() => setTab(t)}
            style={{ ...mhome.tab, ...(tab === t ? mhome.tabOn : {}) }}>{t}</button>
        ))}
      </div>

      {/* Hero */}
      <div style={mhome.hero}>
        <img src={D.u(D.SHOTS.heroW, 900)} style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }} alt="" />
        <div style={mhome.heroOver}>
          <div style={{ fontSize: 9, letterSpacing: '0.2em', color: 'rgba(255,255,255,.85)' }}>کالکشن پاییز ۱۴۰۵</div>
          <div style={{ fontSize: 42, fontWeight: 200, color: 'white', lineHeight: 1, margin: '8px 0 12px' }}>سکوت پاییزی</div>
          <button style={mhome.heroBtn}>خرید کالکشن</button>
        </div>
      </div>

      {/* Quick categories */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, marginTop: 2 }}>
        {[{ fa: 'لباس', s: 'p3' }, { fa: 'مانتو و ژاکت', s: 'p9' }, { fa: 'لوازم جانبی', s: 'p11' }, { fa: 'حراج', s: 'p10' }].map(c => (
          <a key={c.fa} style={{ position: 'relative', aspectRatio: '4/5', overflow: 'hidden' }}>
            <img src={D.u(D.SHOTS[c.s], 600)} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="" />
            <div style={{ position: 'absolute', insetInlineStart: 12, bottom: 12, color: 'white', fontSize: 16, fontWeight: 300 }}>{c.fa}</div>
          </a>
        ))}
      </div>

      {/* New in */}
      <div style={{ padding: '32px 16px 12px' }}>
        <div className="eyebrow-fa" style={{ marginBottom: 4 }}>تازه رسیده‌ها</div>
        <div style={{ fontSize: 22, fontWeight: 200 }}>جدیدترین‌های فصل</div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
        {D.PRODUCTS.slice(0, 4).map(p => <MProductCard key={p.id} p={p} onClick={() => onProduct && onProduct(p)} />)}
      </div>
      <a style={{ display: 'block', textAlign: 'center', marginTop: 20, fontSize: 12, borderBottom: '1px solid var(--ink)', paddingBottom: 4, width: 'fit-content', margin: '24px auto 0' }}>مشاهده همه ←</a>

      {/* Editorial */}
      <div style={{ marginTop: 40, position: 'relative', height: 480, overflow: 'hidden' }}>
        <img src={D.u(D.SHOTS.heroM, 900)} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="" />
        <div style={{ position: 'absolute', insetInlineStart: 16, bottom: 24, color: 'white' }}>
          <div style={{ fontSize: 9, letterSpacing: '0.2em' }}>داستان فصل</div>
          <div style={{ fontSize: 32, fontWeight: 200, marginTop: 8, lineHeight: 1.1 }}>تیلورد،<br />دوباره تعریف شده.</div>
          <button style={{ ...mhome.heroBtn, marginTop: 16, background: 'transparent', border: '1px solid white', color: 'white' }}>کالکشن مردانه</button>
        </div>
      </div>

      {/* Editor's pick */}
      <div style={{ padding: '32px 16px 12px' }}>
        <div className="eyebrow-fa" style={{ marginBottom: 4 }}>منتخب سردبیر</div>
        <div style={{ fontSize: 22, fontWeight: 200 }}>تکه‌هایی که این هفته دوست داریم</div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, marginBottom: 32 }}>
        {D.PRODUCTS.slice(4, 8).map(p => <MProductCard key={p.id} p={p} onClick={() => onProduct && onProduct(p)} />)}
      </div>

      {/* Service strip */}
      <div style={{ background: 'var(--bone)', padding: '24px 16px', display: 'flex', flexDirection: 'column', gap: 16, marginTop: 20 }}>
        {[
          { t: 'ارسال رایگان', d: 'برای خرید بالای ۲٬۰۰۰٬۰۰۰ تومان' },
          { t: 'بازگرداندن آسان', d: 'تا ۳۰ روز پس از خرید' },
          { t: 'پرداخت امن', d: 'درگاه‌های معتبر بانکی' },
        ].map((s, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: i < 2 ? '1px solid var(--line)' : 'none', paddingBottom: 12 }}>
            <div>
              <div style={{ fontSize: 13, fontWeight: 500 }}>{s.t}</div>
              <div style={{ fontSize: 11, color: 'var(--mute)', marginTop: 2 }}>{s.d}</div>
            </div>
            <span style={{ fontSize: 16 }}>←</span>
          </div>
        ))}
      </div>

      {/* mini footer */}
      <div style={{ background: 'var(--ink)', color: 'white', padding: '32px 16px', textAlign: 'center', fontSize: 11 }}>
        <div style={{ fontSize: 16, fontWeight: 300, letterSpacing: '0.04em', marginBottom: 8 }}>نیلو</div>
        <div style={{ color: 'rgba(255,255,255,.7)' }}>© ۱۴۰۵ نیلو · تمامی حقوق محفوظ</div>
      </div>
    </div>
  );
}

const mhome = {
  tabs: { display: 'flex', justifyContent: 'center', gap: 24, padding: '12px 0', borderBottom: '1px solid var(--line)', background: 'var(--paper)' },
  tab: { fontSize: 13, padding: '4px 0', borderBottom: '1px solid transparent' },
  tabOn: { borderColor: 'var(--ink)', fontWeight: 500 },
  hero: { position: 'relative', aspectRatio: '4/5', overflow: 'hidden' },
  heroOver: { position: 'absolute', insetInlineStart: 16, bottom: 24, maxWidth: '80%' },
  heroBtn: { padding: '11px 20px', background: 'white', color: 'var(--ink)', fontSize: 11, letterSpacing: '0.14em', fontWeight: 500 },
};

// Mobile product card
function MProductCard({ p, onClick }) {
  return (
    <div onClick={onClick} style={{ cursor: 'pointer' }}>
      <div style={{ position: 'relative', aspectRatio: '3/4', background: 'var(--bone)' }}>
        <img src={p.main} style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }} alt="" />
        {p.isNew && <span style={{ position: 'absolute', top: 8, insetInlineStart: 8, background: 'white', padding: '3px 6px', fontSize: 9, letterSpacing: '0.1em' }}>جدید</span>}
        {p.sale && <span style={{ position: 'absolute', top: 8, insetInlineStart: 8, background: 'var(--saffron)', color: 'white', padding: '3px 6px', fontSize: 9, letterSpacing: '0.1em' }}>حراج</span>}
        <button style={{ position: 'absolute', top: 8, insetInlineEnd: 8, padding: 4 }}>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.4">
            <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10z" />
          </svg>
        </button>
      </div>
      <div style={{ padding: '8px 4px 4px' }}>
        <div style={{ fontSize: 11, lineHeight: 1.4 }}>{p.name}</div>
        <div style={{ fontSize: 11, marginTop: 2 }} className="num">
          {p.sale ? <>
            <span style={{ color: 'var(--saffron)' }}>{p.price}</span> <span style={{ color: 'var(--mute)', textDecoration: 'line-through', fontSize: 10, marginInlineStart: 4 }}>{p.oldPrice}</span>
          </> : p.price} <span style={{ color: 'var(--mute)', fontSize: 10 }}>تومان</span>
        </div>
      </div>
    </div>
  );
}

// ─── MOBILE PLP ─────────────────────────────────────────────────────────────
function MPLP({ onProduct, onBack, onSearch, onBag }) {
  const D = window.NILOO_DATA;
  const items = [...D.PRODUCTS, ...D.PRODUCTS].slice(0, 12);
  return (
    <div style={{ background: 'var(--paper)' }}>
      <MHeader showBack onBack={onBack} onSearch={onSearch} onBag={onBag} />
      <div style={{ padding: '16px' }}>
        <div style={{ fontSize: 10, color: 'var(--mute)' }}>زن / لباس</div>
        <div style={{ fontSize: 26, fontWeight: 200, marginTop: 4 }}>پیراهن زنانه</div>
        <div style={{ fontSize: 11, color: 'var(--mute)', marginTop: 2 }} className="num">۱۲۸ کالا</div>
      </div>

      {/* Filter chips horizontal */}
      <div style={{ display: 'flex', gap: 6, padding: '0 16px 12px', overflowX: 'auto' }}>
        {['همه', 'پیراهن کوتاه', 'پیراهن میدی', 'پیراهن بلند', 'مجلسی'].map((c, i) => (
          <button key={c} style={{ flexShrink: 0, padding: '8px 14px', fontSize: 11, border: '1px solid', borderColor: i === 0 ? 'var(--ink)' : 'var(--line)', background: i === 0 ? 'var(--ink)' : 'transparent', color: i === 0 ? 'white' : 'var(--ink)' }}>{c}</button>
        ))}
      </div>

      {/* Toolbar */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <button style={{ padding: '12px', fontSize: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, borderInlineEnd: '1px solid var(--line)' }}>
          <Icon name="filter" size={14} /> فیلتر
        </button>
        <button style={{ padding: '12px', fontSize: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, borderInlineEnd: '1px solid var(--line)' }}>
          <Icon name="sort" size={14} /> مرتب‌سازی
        </button>
        <button style={{ padding: '12px', fontSize: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <ViewIcon n={2} />
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
        {items.map((p, i) => <MProductCard key={i} p={p} onClick={() => onProduct && onProduct(p)} />)}
      </div>
    </div>
  );
}

// ─── MOBILE PDP ─────────────────────────────────────────────────────────────
function MPDP({ product, onBack, onSearch, onBag }) {
  const D = window.NILOO_DATA;
  const p = product || D.PRODUCTS[0];
  const [size, setSize] = React.useState(null);
  return (
    <div style={{ background: 'var(--paper)', paddingBottom: 80 }}>
      <MHeader showBack onBack={onBack} onSearch={onSearch} onBag={onBag} />
      {/* Image gallery — horizontal swipe */}
      <div style={{ display: 'flex', overflowX: 'auto', scrollSnapType: 'x mandatory' }}>
        {[p.main, p.hover, D.u(D.SHOTS.p3, 900)].map((g, i) => (
          <img key={i} src={g} style={{ width: '100%', flexShrink: 0, scrollSnapAlign: 'start', aspectRatio: '3/4', objectFit: 'cover' }} alt="" />
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 4, padding: '8px 0' }}>
        {[0, 1, 2].map(i => <span key={i} style={{ width: 16, height: 1, background: i === 0 ? 'var(--ink)' : 'var(--line)' }} />)}
      </div>

      <div style={{ padding: '12px 16px' }}>
        <div className="eyebrow-fa" style={{ marginBottom: 6, fontSize: 10 }}>زنانه · {p.cat}</div>
        <div style={{ fontSize: 20, fontWeight: 300 }}>{p.name}</div>
        <div style={{ marginTop: 8, display: 'flex', gap: 8, alignItems: 'baseline' }}>
          <span style={{ fontSize: 18 }} className="num">{p.price} تومان</span>
          {p.sale && <span style={{ fontSize: 12, color: 'var(--mute)', textDecoration: 'line-through' }} className="num">{p.oldPrice}</span>}
        </div>
        <div style={{ fontSize: 10, color: 'var(--mute)', marginTop: 4 }}>قیمت با احتساب مالیات</div>

        {/* Color */}
        <div style={{ marginTop: 20 }}>
          <div style={{ fontSize: 11, fontWeight: 500, marginBottom: 8 }}>رنگ: {p.color}</div>
          <div style={{ display: 'flex', gap: 6 }}>
            {['#1a1a1a', '#e8dfcf', '#5b6a4f', '#3b4d6b'].map((c, i) => (
              <span key={i} style={{ width: 28, height: 36, background: c, border: i === 0 ? '1px solid var(--ink)' : '1px solid var(--line)' }} />
            ))}
          </div>
        </div>

        {/* Sizes */}
        <div style={{ marginTop: 20 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
            <span style={{ fontSize: 11, fontWeight: 500 }}>سایز</span>
            <span style={{ fontSize: 10, borderBottom: '1px solid var(--ink-3)' }}>راهنمای سایز</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 4 }}>
            {p.sizes.map(s => (
              <button key={s} onClick={() => setSize(s)}
                style={{ padding: '10px 0', fontSize: 11, fontWeight: 500, border: '1px solid', borderColor: size === s ? 'var(--ink)' : 'var(--line)', background: size === s ? 'var(--ink)' : 'transparent', color: size === s ? 'white' : 'var(--ink)' }}>
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Accordions */}
        <div style={{ marginTop: 24 }}>
          {['مشخصات', 'ترکیب و مراقبت', 'ارسال و بازگشت'].map(t => (
            <div key={t} style={{ borderTop: '1px solid var(--line)', display: 'flex', justifyContent: 'space-between', padding: '14px 0', fontSize: 12, fontWeight: 500 }}>
              <span>{t}</span><Icon name="plus" size={14} />
            </div>
          ))}
        </div>
      </div>

      {/* Sticky add-to-bag */}
      <div style={{ position: 'fixed', bottom: 0, insetInlineStart: 0, insetInlineEnd: 0, padding: 12, background: 'var(--paper)', borderTop: '1px solid var(--line)', display: 'flex', gap: 6, zIndex: 5 }}>
        <button style={{ flex: 1, padding: '14px', background: 'var(--ink)', color: 'white', fontSize: 11, letterSpacing: '0.16em', fontWeight: 500 }}>افزودن به سبد خرید</button>
        <button style={{ width: 48, border: '1px solid var(--ink)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.4">
            <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

// ─── MOBILE SEARCH ──────────────────────────────────────────────────────────
function MSearch({ onClose, onProduct }) {
  const D = window.NILOO_DATA;
  const [q, setQ] = React.useState('پیراهن');
  const matches = D.PRODUCTS.filter(p => !q || p.name.includes(q) || p.cat.includes(q)).slice(0, 4);
  return (
    <div style={{ background: 'var(--paper)', minHeight: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '12px 16px', borderBottom: '1px solid var(--line)' }}>
        <Icon name="search" size={16} />
        <input value={q} onChange={(e) => setQ(e.target.value)} autoFocus
          style={{ flex: 1, border: 0, outline: 0, fontSize: 16, fontWeight: 300, fontFamily: 'var(--font-display)', background: 'transparent' }} />
        <button onClick={onClose} style={{ fontSize: 12 }}>بستن</button>
      </div>

      <div style={{ padding: 16 }}>
        <div className="eyebrow-fa" style={{ marginBottom: 12, fontSize: 10 }}>جستجوهای پرطرفدار</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 24 }}>
          {['پالتو پشمی', 'پیراهن میدی', 'تی‌شرت پایه', 'بوت چرم', 'دامن پلیسه'].map(t => (
            <button key={t} onClick={() => setQ(t)} style={{ padding: '7px 12px', fontSize: 11, border: '1px solid var(--line)' }}>{t}</button>
          ))}
        </div>

        <div className="eyebrow-fa" style={{ marginBottom: 8, fontSize: 10 }}>نتایج برای «{q}»</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
          {matches.map(p => <MProductCard key={p.id} p={p} onClick={() => onProduct && onProduct(p)} />)}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { MHome, MPLP, MPDP, MSearch, MHeader, MProductCard });
