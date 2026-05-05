// PDP — product detail page with image gallery, color/size pickers, sticky add-to-bag

function ScreenPDP({ product, onBack, onProduct }) {
  const D = window.NILOO_DATA;
  const p = product || D.PRODUCTS[0];
  const [size, setSize] = React.useState(null);
  const [zoomed, setZoomed] = React.useState(false);
  const [acc, setAcc] = React.useState('details');

  // Build a gallery from the catalog
  const gallery = [p.main, p.hover, D.u(D.SHOTS.p3, 1100), D.u(D.SHOTS.p5, 1100), D.u(D.SHOTS.p9, 1100)];

  return (
    <div>
      {/* Breadcrumb */}
      <div style={{ padding: '20px 64px', fontSize: 11, color: 'var(--mute)', letterSpacing: '0.06em' }}>
        <a onClick={onBack} style={{ cursor: 'pointer' }}>زن</a>  /  پیراهن  /  <span style={{ color: 'var(--ink)' }}>{p.name}</span>
      </div>

      <div style={pdp.layout}>
        {/* GALLERY — vertical scroll */}
        <div style={pdp.gallery}>
          {gallery.map((g, i) => (
            <div key={i} style={pdp.galleryItem} onClick={() => setZoomed(g)}>
              <img src={g} style={{ width: '100%', display: 'block' }} alt="" />
              <button style={pdp.zoomBtn}><Icon name="zoom" size={14} /></button>
            </div>
          ))}
        </div>

        {/* INFO — sticky */}
        <aside style={pdp.info}>
          <div style={{ position: 'sticky', top: 140, padding: '32px 0' }}>
            <div className="eyebrow" style={{ marginBottom: 8 }}>زنانه · {p.cat}</div>
            <h1 style={{ fontSize: 28, fontWeight: 300, lineHeight: 1.3, marginBottom: 16 }}>{p.name}</h1>
            <div style={{ display: 'flex', gap: 12, alignItems: 'baseline', marginBottom: 4 }}>
              {p.sale ? (
                <>
                  <span style={{ fontSize: 22, color: 'var(--saffron)' }} className="num">{p.price} تومان</span>
                  <span style={{ fontSize: 14, color: 'var(--mute)', textDecoration: 'line-through' }} className="num">{p.oldPrice}</span>
                </>
              ) : (
                <span style={{ fontSize: 22 }} className="num">{p.price} تومان</span>
              )}
            </div>
            <div style={{ fontSize: 11, color: 'var(--mute)', marginBottom: 24 }}>قیمت با احتساب مالیات</div>

            {/* Color */}
            <div style={{ marginBottom: 24 }}>
              <div style={pdp.label}>رنگ: <span style={{ color: 'var(--ink-3)', fontWeight: 400 }}>{p.color}</span></div>
              <div style={{ display: 'flex', gap: 8 }}>
                {[{ c: '#1a1a1a', sel: p.color === 'مشکی' }, { c: '#e8dfcf', sel: p.color === 'کرم' }, { c: '#5b6a4f' }, { c: '#3b4d6b' }].map((sw, i) => (
                  <button key={i} style={{ width: 36, height: 48, background: sw.c, border: sw.sel ? '1px solid var(--ink)' : '1px solid var(--line)', outline: sw.sel ? '1px solid var(--ink)' : 'none', outlineOffset: 2 }} />
                ))}
              </div>
            </div>

            {/* Size */}
            <div style={{ marginBottom: 12 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                <div style={pdp.label}>سایز</div>
                <a style={{ fontSize: 11, borderBottom: '1px solid var(--ink-3)', paddingBottom: 1, cursor: 'pointer' }}>راهنمای سایز</a>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 6 }}>
                {p.sizes.map(s => (
                  <button key={s} onClick={() => setSize(s)}
                    style={{ ...pdp.size, ...(size === s ? pdp.sizeOn : {}) }}>
                    {s}
                  </button>
                ))}
              </div>
              <div style={{ fontSize: 11, color: 'var(--mute)', marginTop: 10 }}>
                {size ? `سایز ${size} — ۸ عدد موجود` : 'یک سایز انتخاب کنید'}
              </div>
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: 8, marginTop: 24 }}>
              <button style={pdp.cta}>افزودن به سبد خرید</button>
              <button style={pdp.iconCta}>
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.4">
                  <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10z" />
                </svg>
              </button>
            </div>

            <div style={{ display: 'flex', gap: 6, alignItems: 'center', marginTop: 16, fontSize: 12, color: 'var(--ink-3)' }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#5b6a4f' }} /> موجود · ارسال در ۲ روز کاری
            </div>

            {/* Service rows */}
            <div style={{ marginTop: 24, borderTop: '1px solid var(--line)' }}>
              {[
                { t: 'ارسال رایگان', d: 'برای خرید بالای ۲٬۰۰۰٬۰۰۰ تومان' },
                { t: 'بازگرداندن آسان', d: 'تا ۳۰ روز پس از خرید' },
                { t: 'دریافت در فروشگاه', d: 'یافتن نزدیک‌ترین فروشگاه' },
              ].map((s, i) => (
                <div key={i} style={pdp.svcRow}>
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 500 }}>{s.t}</div>
                    <div style={{ fontSize: 11, color: 'var(--mute)', marginTop: 2 }}>{s.d}</div>
                  </div>
                  <span style={{ fontSize: 14 }}>←</span>
                </div>
              ))}
            </div>

            {/* Accordions */}
            <div style={{ marginTop: 24 }}>
              {[
                { k: 'details', t: 'مشخصات', body: 'پیراهن میدی از پارچه‌ی ساتن با براقیت ملایم. یقه‌گرد، آستین بلند با کاف دکمه‌خور، طول میدی. آستر دارد.' },
                { k: 'compose', t: 'ترکیب و مراقبت', body: '۹۸٪ پلی‌استر · ۲٪ الاستان. شست‌وشو با آب سرد. خشک‌شویی توصیه می‌شود.' },
                { k: 'ship', t: 'ارسال و بازگشت', body: 'ارسال استاندارد ۲ تا ۴ روز کاری. بازگشت رایگان تا ۳۰ روز پس از خرید.' },
              ].map(a => (
                <div key={a.k} style={{ borderTop: '1px solid var(--line)' }}>
                  <button onClick={() => setAcc(acc === a.k ? '' : a.k)}
                    style={{ width: '100%', display: 'flex', justifyContent: 'space-between', padding: '16px 0', fontSize: 13, fontWeight: 500 }}>
                    {a.t} <Icon name={acc === a.k ? 'minus' : 'plus'} size={14} />
                  </button>
                  {acc === a.k && <div style={{ fontSize: 13, color: 'var(--ink-3)', lineHeight: 1.8, paddingBottom: 16 }}>{a.body}</div>}
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>

      {/* You may also like */}
      <SectionHeading kicker="شاید بپسندید" title="ست کنید با" />
      <section style={{ padding: '0 64px 96px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
        {D.PRODUCTS.slice(6, 10).map(rp => <ProductCard key={rp.id} p={rp} onClick={() => onProduct && onProduct(rp)} />)}
      </section>

      {zoomed && (
        <div onClick={() => setZoomed(false)}
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,.92)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'zoom-out' }}>
          <img src={zoomed} style={{ maxHeight: '92vh', maxWidth: '92vw', objectFit: 'contain' }} alt="" />
          <button style={{ position: 'absolute', top: 24, insetInlineEnd: 24, color: 'white' }}><Icon name="close" size={24} /></button>
        </div>
      )}
    </div>
  );
}

const pdp = {
  layout: { display: 'grid', gridTemplateColumns: '1fr 440px', gap: 64, padding: '0 64px' },
  gallery: { display: 'flex', flexDirection: 'column', gap: 6 },
  galleryItem: { position: 'relative', cursor: 'zoom-in' },
  zoomBtn: { position: 'absolute', top: 12, insetInlineEnd: 12, width: 32, height: 32, background: 'rgba(255,255,255,.85)', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  info: { },
  label: { fontSize: 12, letterSpacing: '0.04em', fontWeight: 500, marginBottom: 10 },
  size: { padding: '14px 0', fontSize: 12, fontWeight: 500, border: '1px solid var(--line)', background: 'var(--paper)' },
  sizeOn: { borderColor: 'var(--ink)', background: 'var(--ink)', color: 'white' },
  cta: { flex: 1, padding: '16px 24px', background: 'var(--ink)', color: 'white', fontSize: 12, letterSpacing: '0.16em', fontWeight: 500 },
  iconCta: { width: 52, border: '1px solid var(--ink)', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  svcRow: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 0', borderBottom: '1px solid var(--line)', cursor: 'pointer' },
};

Object.assign(window, { ScreenPDP });
