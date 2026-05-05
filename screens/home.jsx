// Homepage — editorial hero, asymmetric collection grids, story bands

function ScreenHome({ onProduct }) {
  const D = window.NILOO_DATA;
  const products = D.PRODUCTS;

  return (
    <div>
      {/* HERO — full-bleed editorial */}
      <section style={hStyles.hero}>
        <img src={D.u(D.SHOTS.heroW, 1800)} style={hStyles.heroImg} alt="" />
        <div style={hStyles.heroOverlay}>
          <div className="eyebrow" style={{ color: 'rgba(255,255,255,.85)' }}>کالکشن پاییز ۱۴۰۵</div>
          <h1 style={hStyles.heroTitle}>سکوت پاییزی</h1>
          <p style={hStyles.heroSub}>پارچه‌های نرم، خطوط معمارانه و رنگ‌های زمینی.<br />فصلی برای صبر کردن.</p>
          <div style={hStyles.heroBtns}>
            <button style={hStyles.btnPri}>خرید کالکشن زنانه</button>
            <button style={hStyles.btnSec}>خرید کالکشن مردانه</button>
          </div>
        </div>
      </section>

      {/* PROMO — summer collection banner */}
      <section style={{ padding: '0 64px', marginBottom: 48  ,marginTop: 48}}>
        <div style={hStyles.promoBanner} aria-hidden>
          <img src={D.u(D.SHOTS.studio2, 1600)} style={hStyles.promoBannerImg} alt="" />
          <div style={hStyles.promoBannerGrad} aria-hidden />
          <div style={hStyles.promoBannerInner} aria-hidden>
            <div className="eyebrow" style={{ color: 'rgba(255,255,255,.85)' }}>کالکشن جدید</div>
            <h2 style={hStyles.promoBannerTitle}>کالکشن تابستانه رسید</h2>
            <p style={hStyles.promoBannerLead}>
              پارچه‌های سبک، بافت نفس‌گیر و خطوط مینیمال با الهام از لباس‌های روزمره و سفر —
              قطعاتی برای روزهای گرم که هم راحت‌اند و هم ویرایشی.
            </p>
            <button type="button" style={hStyles.promoBannerBtn}>خرید کالکشن تابستانه</button>
          </div>
        </div>
      </section>

      {/* QUICK CATEGORY TILES */}
      <section style={{ padding: '64px 64px 32px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 4 }}>
        {[
          { fa: 'زنانه', en: 'WOMAN', shot: 'p1' },
          { fa: 'مردانه', en: 'MAN', shot: 'p9' },
          { fa: 'کفش و کیف', en: 'SHOES & BAGS', shot: 'p11' },
        ].map((c, i) => (
          <a key={i} style={hStyles.tile}>
            <img src={D.u(D.SHOTS[c.shot], 900)} style={hStyles.tileImg} alt="" />
            <div style={hStyles.tileCap}>
              <div style={{ fontSize: 32, fontWeight: 200, letterSpacing: '0.04em' }}>{c.fa}</div>
              <div style={{ fontSize: 11, letterSpacing: '0.3em', color: 'rgba(255,255,255,.85)', marginTop: 4 }}>{c.en}</div>
            </div>
          </a>
        ))}
      </section>

      {/* NEW IN — editorial slab title */}
      <SectionHeading kicker="تازه رسیده‌ها" title="جدیدترین‌های فصل" link="مشاهده همه" />
      <section style={{ padding: '0 64px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px 16px', marginBottom: 96 }}>
        {products.slice(0, 4).map(p => <ProductCard key={p.id} p={p} onClick={() => onProduct && onProduct(p)} />)}
      </section>

      {/* SPLIT EDITORIAL */}
      <section style={hStyles.split}>
        <div style={hStyles.splitImg}>
          <img src={D.u(D.SHOTS.heroM, 1200)} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="" />
        </div>
        <div style={hStyles.splitText}>
          <div className="eyebrow">داستان فصل</div>
          <h2 style={{ fontSize: 56, fontWeight: 200, lineHeight: 1.1, margin: '20px 0 24px' }}>
            تیلورد، <br />دوباره تعریف شده.
          </h2>
          <p style={{ fontSize: 15, color: 'var(--ink-3)', lineHeight: 1.8, maxWidth: 380, marginBottom: 32 }}>
            کت و شلوارهایی با خطوط نرم، شانه‌های آرام و پارچه‌هایی که با حرکت بدن همراه می‌شوند.
            رویکردی تازه به لباس رسمی برای روزهای تازه.
          </p>
          <a style={hStyles.linkUnder}>کشف کالکشن مردانه ←</a>
        </div>
      </section>

      {/* MORE PRODUCTS */}
      <SectionHeading kicker="منتخب سردبیر" title="تکه‌هایی که این هفته دوست داریم" link="مشاهده همه" />
      <section style={{ padding: '0 64px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px 16px', marginBottom: 64 }}>
        {products.slice(4, 8).map(p => <ProductCard key={p.id} p={p} onClick={() => onProduct && onProduct(p)} />)}
      </section>

      {/* ACCESSORIES TEASER */}
      <section style={hStyles.living}>
        <img src={D.u(D.SHOTS.p11, 1800)} style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }} alt="" />
        <div style={hStyles.livingOverlay}>
          <div className="eyebrow" style={{ color: 'rgba(255,255,255,.85)' }}>نیلو اکسسوری</div>
          <h2 style={{ fontSize: 64, fontWeight: 200, color: 'white', margin: '16px 0 24px', letterSpacing: '0.02em' }}>جزئیات کامل‌کننده</h2>
          <p style={{ color: 'rgba(255,255,255,.9)', fontSize: 15, maxWidth: 420, margin: '0 auto', lineHeight: 1.8 }}>
            کیف‌های ساختاری، کفش‌های مینیمال و اکسسوری‌هایی که استایل روزمره را کامل می‌کنند.
          </p>
          <button style={{ ...hStyles.btnPri, marginTop: 32, background: 'white', color: 'var(--ink)' }}>کالکشن کیف و کفش</button>
        </div>
      </section>

      {/* SERVICE STRIP */}
      <section style={hStyles.svcStrip}>
        {[
          { t: 'ارسال رایگان', d: 'برای خرید بالای ۲٬۰۰۰٬۰۰۰ تومان' },
          { t: 'بازگرداندن آسان', d: 'تا ۳۰ روز پس از خرید' },
          { t: 'پرداخت امن', d: 'درگاه‌های معتبر بانکی' },
          { t: 'پشتیبانی ۲۴/۷', d: 'پاسخ‌گویی در هر ساعت' },
        ].map((s, i) => (
          <div key={i} style={hStyles.svc}>
            <div style={{ fontSize: 13, fontWeight: 500 }}>{s.t}</div>
            <div style={{ fontSize: 12, color: 'var(--mute)' }}>{s.d}</div>
          </div>
        ))}
      </section>
    </div>
  );
}

function SectionHeading({ kicker, title, link }) {
  return (
    <div style={{ padding: '32px 64px 28px', display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
      <div>
        <div className="eyebrow" style={{ marginBottom: 6 }}>{kicker}</div>
        <h2 style={{ fontSize: 32, fontWeight: 200, letterSpacing: '0.01em' }}>{title}</h2>
      </div>
      {link && <a style={{ fontSize: 13, borderBottom: '1px solid var(--ink)', paddingBottom: 2, cursor: 'pointer' }}>{link}</a>}
    </div>
  );
}

const hStyles = {
  hero: { position: 'relative', height: '88vh', minHeight: 640, overflow: 'hidden' },
  heroImg: { position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' },
  heroOverlay: { position: 'absolute', insetInlineStart: 64, bottom: 64, color: 'white', maxWidth: 520 },
  heroTitle: { fontSize: 96, fontWeight: 200, lineHeight: 1, margin: '12px 0 20px', letterSpacing: '-0.01em' },
  heroSub: { fontSize: 16, lineHeight: 1.7, marginBottom: 32, maxWidth: 380, color: 'rgba(255,255,255,.92)' },
  heroBtns: { display: 'flex', gap: 12 },
  promoBanner: { position: 'relative', minHeight: 380, overflow: 'hidden', borderRadius: 2 },
  promoBannerImg: { position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center center' },
  promoBannerGrad: {
    position: 'absolute', inset: 0,
    background: 'linear-gradient(90deg, transparent 48%, rgba(0,0,0,.74) 100%)',
  },
  promoBannerInner: {
    position: 'relative',
    padding: '48px 56px',
    maxWidth: 480,
    minHeight: 380,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    color: '#fff',
  },
  promoBannerTitle: {
    fontSize: 52, fontWeight: 200, lineHeight: 1.08,
    letterSpacing: '-0.02em',
    margin: '14px 0 18px',
  },
  promoBannerLead: {
    fontSize: 15, lineHeight: 1.85,
    color: 'rgba(255,255,255,.9)',
    margin: 0,
    marginBottom: 28,
  },
  promoBannerBtn: {
    alignSelf: 'flex-start',
    padding: '14px 28px',
    background: '#fff',
    color: 'var(--ink)',
    border: 'none',
    cursor: 'pointer',
    fontSize: 11,
    letterSpacing: '0.18em',
    fontWeight: 500,
  },
  btnPri: { padding: '14px 32px', background: 'var(--ink)', color: 'white', fontSize: 12, letterSpacing: '0.16em', fontWeight: 500 },
  btnSec: { padding: '14px 32px', background: 'transparent', color: 'white', border: '1px solid white', fontSize: 12, letterSpacing: '0.16em', fontWeight: 500 },
  tile: { position: 'relative', aspectRatio: '3/4', overflow: 'hidden', cursor: 'pointer' },
  tileImg: { width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .8s ease' },
  tileCap: { position: 'absolute', insetInlineStart: 32, bottom: 32, color: 'white' },
  split: { display: 'grid', gridTemplateColumns: '1.2fr 1fr', minHeight: 700, padding: '0 64px', gap: 64, alignItems: 'center', marginBottom: 96 },
  splitImg: { aspectRatio: '4/5', overflow: 'hidden' },
  splitText: { padding: '0 0 40px' },
  linkUnder: { borderBottom: '1px solid var(--ink)', paddingBottom: 4, fontSize: 13, cursor: 'pointer' },
  living: { position: 'relative', height: '70vh', minHeight: 560, overflow: 'hidden', marginBottom: 96 },
  livingOverlay: { position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', background: 'rgba(0,0,0,.2)' },
  svcStrip: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' },
  svc: { padding: '28px 32px', textAlign: 'center', borderInlineStart: '1px solid var(--line)' },
};

Object.assign(window, { ScreenHome, SectionHeading });
