// Cart — سبد خرید با چند خط، پیشنهاد شخصی‌شدهٔ AI در باکس متمایز، خلاصه سفارش

function ScreenCart({ onContinueShopping, onNavigate }) {
  const D = window.NILOO_DATA;
  const P = D.PRODUCTS;
  const lines = [
    { p: P[0], qty: 1, lineTotal: '۴٬۸۹۰٬۰۰۰' },
    { p: P[1], qty: 2, lineTotal: '۴٬۷۸۰٬۰۰۰' },
    { p: P[5], qty: 1, lineTotal: '۱٬۶۹۰٬۰۰۰' },
  ];
  const aiPick = P[3];

  const subtotalPersian = '۱۱٬۳۶۰٬۰۰۰';
  const subtotalNum = 11360000;
  const shippingFree = subtotalNum >= 2000000;
  const shippingPersian = shippingFree ? '۰' : '۱۳۹٬۰۰۰';
  const shippingNum = shippingFree ? 0 : 139000;
  const totalPersian = formatPersianMoney(subtotalNum + shippingNum);

  return (
    <div style={{ paddingBottom: 96 }}>
      <div style={{ padding: '28px 64px 24px', fontSize: 11, color: 'var(--mute)', letterSpacing: '0.06em' }}>
        <a onClick={onContinueShopping} style={{ cursor: 'pointer', borderBottom: '1px solid var(--line)' }}>ادامه خرید</a>
        <span style={{ margin: '0 8px', color: 'var(--line)' }}>/</span>
        <span style={{ color: 'var(--ink)' }}>سبد خرید</span>
      </div>

      <div style={{ padding: '0 64px', display: 'grid', gridTemplateColumns: '1fr 340px', gap: 56, alignItems: 'flex-start' }}>
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 28 }}>
            <h1 style={{ fontSize: 36, fontWeight: 200, letterSpacing: '-0.02em', margin: 0 }}>سبد خرید شما</h1>
            <span style={{ fontSize: 13, color: 'var(--mute)' }}>{lines.length} قلم محصول</span>
          </div>

          <div style={{ borderTop: '1px solid var(--line)' }}>
            {lines.map(({ p, qty, lineTotal }) => (
              <div key={`${p.id}-${qty}`} style={{
                display: 'grid',
                gridTemplateColumns: '112px 1fr auto auto',
                gap: 24,
                alignItems: 'center',
                padding: '24px 0',
                borderBottom: '1px solid var(--line)',
              }}>
                <div style={{ aspectRatio: '3/4', overflow: 'hidden', background: 'var(--bone)' }}>
                  <img src={p.main} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div>
                  <div style={{ fontSize: 14, marginBottom: 6 }}>{p.name}</div>
                  <div style={{ fontSize: 12, color: 'var(--mute)' }}>رنگ: {p.color} · سایز M</div>
                  <button type="button" style={{ ...cartSt.linkMuted, marginTop: 12 }}>حذف از سبد</button>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <button type="button" style={cartSt.qBtn}>−</button>
                  <span className="num" style={{ minWidth: 24, textAlign: 'center' }}>{qty}</span>
                  <button type="button" style={cartSt.qBtn}>+</button>
                </div>
                <div style={{ fontSize: 15, justifySelf: 'end' }} className="num">
                  {lineTotal} تومان
                </div>
              </div>
            ))}
          </div>

          <AiSuggestCartBlock product={aiPick} />

          <div style={{ marginTop: 40, paddingTop: 28, borderTop: '1px solid var(--line)' }}>
            <div className="eyebrow" style={{ marginBottom: 14 }}>میانبرها</div>
            <CartQuickLinks onNavigate={onNavigate} />
          </div>
        </div>

        <aside style={{
          position: 'sticky',
          top: 120,
          padding: 32,
          background: 'var(--bone)',
          border: '1px solid var(--line)',
          fontSize: 13,
        }}>
          <div style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--mute)', marginBottom: 24 }}>خلاصه سفارش</div>

          <div style={{ marginBottom: 20 }}>
            <input placeholder="کد تخفیف" style={cartSt.inp} />
            <button type="button" style={cartSt.btnGhost}>اعمال</button>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
            <span style={{ color: 'var(--ink-3)' }}>جمع اقلام</span>
            <span className="num">{subtotalPersian} تومان</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
            <span style={{ color: 'var(--ink-3)' }}>ارسال</span>
            <span className="num">{shippingPersian} تومان</span>
          </div>
          <p style={{ fontSize: 11, color: 'var(--mute)', margin: '0 0 20px', lineHeight: 1.65 }}>
            ارسال رایگان برای سفارش‌های بالای ۲٬۰۰۰٬۰۰۰ تومان. زمان تحویل تقریبی: ۲ تا ۴ روز کاری تهران، ۳ تا ۵ روز شهرستان.
          </p>

          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            paddingTop: 20,
            marginBottom: 24,
            borderTop: '1px solid var(--line)',
            fontWeight: 500,
            fontSize: 18,
          }}>
            <span>پرداخت نهایی</span>
            <span className="num">{totalPersian} تومان</span>
          </div>

          <button type="button" style={cartSt.cta}>ادامه و پرداخت امن</button>
          <p style={{ fontSize: 11, color: 'var(--mute)', margin: '12px 0 0', lineHeight: 1.6 }}>
            با ادامه، با <a style={{ cursor: 'pointer', borderBottom: '1px solid var(--line)' }}>شرایط فروش و مرجوعی</a> موافقم.
          </p>
        </aside>
      </div>
    </div>
  );
}

function AiSuggestCartBlock({ product, compact }) {
  const p = product;
  return (
    <div style={compact ? { ...cartSt.aiWrap, padding: 16 } : cartSt.aiWrap} role="region" aria-label="پیشنهاد هوش مصنوعی">
      <div style={{ ...cartSt.aiRibbon, marginBottom: compact ? 14 : 18 }}>
        <span style={cartSt.aiSpark} aria-hidden>✦</span>
        پیشنهاد شخصی‌سازی‌شده · نیلو AI
      </div>
      <div style={{
        display: compact ? 'flex' : 'grid',
        flexDirection: compact ? 'column' : undefined,
        gridTemplateColumns: compact ? undefined : '96px minmax(0,1fr) auto',
        gap: compact ? 16 : 20,
        alignItems: compact ? 'stretch' : 'center',
      }}>
        <div style={{ aspectRatio: '3/4', overflow: 'hidden', background: 'var(--bone)', maxWidth: compact ? 112 : undefined }}>
          <img src={p.main} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div>
          <div style={{ fontSize: 11, color: 'var(--saffron)', letterSpacing: '0.12em', marginBottom: 6 }}>بر اساس سبد فعلی شما</div>
          <div style={{ fontSize: compact ? 15 : 16, fontWeight: 400, marginBottom: 8 }}>{p.name}</div>
          <p style={{ fontSize: compact ? 12 : 13, color: 'var(--ink-3)', lineHeight: 1.75, margin: 0 }}>
            مدل هماهنگ با انتخاب‌های فعلی شما برای تکمیل ست.
          </p>
        </div>
        <div style={{ textAlign: compact ? 'start' : 'end', alignSelf: compact ? 'stretch' : 'center' }}>
          <div style={{ fontSize: 14, marginBottom: compact ? 10 : 14 }} className="num">{p.price} تومان</div>
          <button type="button" style={{ ...cartSt.aiAdd, width: compact ? '100%' : undefined }}>افزودن پیشنهاد AI به سبد</button>
          <button type="button" style={{ ...cartSt.linkMuted, display: 'block', marginTop: 10 }}>فعلاً نه، ممنون</button>
        </div>
      </div>
    </div>
  );
}

function CartQuickLinks({ onNavigate }) {
  const items = [
    ['home', 'صفحهٔ اصلی'],
    ['plp', 'فهرست محصولات'],
    ['pdp', 'جزئیات محصول'],
    ['search', 'جستجو'],
  ];
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
      {items.map(([k, label]) => (
        <button
          key={k}
          type="button"
          onClick={() => onNavigate && onNavigate(k)}
          style={cartSt.quickNav}>
          {label}
          <span style={{ opacity: .45 }}> ←</span>
        </button>
      ))}
      <span style={{ fontSize: 12, color: 'var(--mute)', flex: '1 1 200px' }}>
        نسخهٔ موبایل از اسلات «موبایل» در کانوس طراحی.
      </span>
    </div>
  );
}

function formatPersianMoney(n) {
  return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '٬').replace(/[0-9]/g, (d) => '۰۱۲۳۴۵۶۷۸۹'[Number(d)]);
}

const cartSt = {
  inp: { width: '100%', padding: '12px 14px', border: '1px solid var(--line)', background: 'var(--paper)', fontSize: 13, marginBottom: 8, boxSizing: 'border-box' },
  btnGhost: { padding: '10px 18px', border: '1px solid var(--ink)', background: 'transparent', cursor: 'pointer', fontSize: 11, letterSpacing: '0.12em' },
  qBtn: { width: 32, height: 32, border: '1px solid var(--line)', background: 'var(--paper)', cursor: 'pointer', fontSize: 16, lineHeight: 1 },
  linkMuted: { border: 'none', background: 'none', cursor: 'pointer', fontSize: 11, color: 'var(--mute)', padding: 0, textDecoration: 'underline', fontFamily: 'inherit' },
  cta: { width: '100%', padding: '16px', background: 'var(--ink)', color: '#fff', border: 'none', cursor: 'pointer', fontSize: 11, letterSpacing: '0.18em', fontWeight: 500 },
  aiWrap: {
    marginTop: 36,
    padding: '24px',
    border: '2px solid rgba(214,84,27,.55)',
    background: 'linear-gradient(165deg, rgba(214,84,27,.06) 0%, var(--paper) 52%)',
    borderRadius: 2,
    boxShadow: '0 0 0 1px rgba(214,84,27,.12)',
  },
  aiRibbon: {
    fontSize: 10,
    letterSpacing: '0.28em',
    textTransform: 'uppercase',
    color: '#9a4810',
    marginBottom: 18,
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    fontFamily: 'var(--font-latin)',
  },
  aiSpark: { fontSize: 12 },
  aiAdd: {
    padding: '12px 20px',
    background: 'var(--saffron)',
    border: 'none',
    color: '#fff',
    cursor: 'pointer',
    fontSize: 11,
    letterSpacing: '0.1em',
    fontWeight: 500,
    whiteSpace: 'nowrap',
  },
  qLinkMuted: { color: 'var(--ink-3)' },
  quickNav: {
    border: '1px solid var(--line)',
    background: 'var(--paper)',
    padding: '10px 16px',
    fontSize: 12,
    cursor: 'pointer',
    fontFamily: 'inherit',
    color: 'var(--ink)',
  },
};

// موبایل — سبد فشرده + همان پیشنهاد AI
function MCart({ onBack, onNavigate }) {
  const D = window.NILOO_DATA;
  const P = D.PRODUCTS;
  const lines = [
    { p: P[0], qty: 1 },
    { p: P[1], qty: 2 },
    { p: P[5], qty: 1 },
  ];
  const aiPick = P[3];
  return (
    <div style={{ background: 'var(--paper)', minHeight: '100%', paddingBottom: 32 }}>
      <MHeader title="سبد خرید" showBack onBack={onBack} onSearch={() => onNavigate && onNavigate('search')} onBag={() => onNavigate && onNavigate('cart')} />
      <div style={{ padding: '16px' }}>
        <div style={{ fontSize: 19, fontWeight: 200, marginBottom: 18 }}>{lines.reduce((n, x) => n + x.qty, 0)} قلم</div>
        {lines.map(({ p, qty }) => (
          <div key={`${p.id}${qty}`} style={{ display: 'flex', gap: 14, padding: '16px 0', borderBottom: '1px solid var(--line)' }}>
            <div style={{ width: 76, aspectRatio: '3/4', overflow: 'hidden', flexShrink: 0 }}>
              <img src={p.main} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13 }}>{p.name}</div>
              <div style={{ fontSize: 11, color: 'var(--mute)', marginTop: 4 }}>×{qty} · {p.color}</div>
              <div style={{ fontSize: 13, marginTop: 8 }} className="num">{p.price} تومان</div>
            </div>
          </div>
        ))}

        <div style={{ marginTop: 20 }}>
          <AiSuggestCartBlock product={aiPick} compact />
        </div>

        <div style={{ marginTop: 24 }}>
          <div className="eyebrow-fa" style={{ marginBottom: 10 }}>رفتن به</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            { [['home','خانه'], ['plp','محصولات'], ['pdp','کالای نمونه']].map(([k, l]) => (
              <button key={k} type="button" onClick={() => onNavigate && onNavigate(k)} style={cartSt.quickNav}>{l}</button>
            )) }
          </div>
        </div>

        <div style={{
          marginTop: 28,
          paddingTop: 20,
          borderTop: '2px solid var(--line)',
          display: 'flex',
          justifyContent: 'space-between',
          fontWeight: 500,
          fontSize: 16,
        }}>
          <span>جمع کل</span>
          <span className="num">۱۱٬۳۶۰٬۰۰۰ تومان</span>
        </div>
        <button type="button" style={{ ...cartSt.cta, marginTop: 16 }}>پرداخت</button>
      </div>
    </div>
  );
}

Object.assign(window, { ScreenCart, AiSuggestCartBlock, CartQuickLinks, MCart });

