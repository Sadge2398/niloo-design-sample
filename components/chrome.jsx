// Shared chrome: TopBar, Header (with mega menu), Footer
// All RTL, Persian-first.

// using React.useState/useEffect inline to avoid cross-script scope collisions

// ─── Top utility bar ────────────────────────────────────────────────────────
function TopBar() {
  return (
    <div style={tbStyles.bar}>
      <div style={tbStyles.left}>
        <span>ارسال رایگان برای خرید بالای ۲٬۰۰۰٬۰۰۰ تومان</span>
      </div>
      <div style={tbStyles.right}>
        <a>پیگیری سفارش</a>
        <span style={tbStyles.dot}>·</span>
        <a>پشتیبانی</a>
        <span style={tbStyles.dot}>·</span>
        <a>فروشگاه‌ها</a>
      </div>
    </div>
  );
}
const tbStyles = {
  bar: { borderBottom: '1px solid var(--line)', padding: '8px 32px', display: 'flex', justifyContent: 'space-between', fontSize: 11, color: 'var(--ink-3)', background: 'var(--paper)' },
  left: {},
  right: { display: 'flex', gap: 6, alignItems: 'center' },
  dot: { color: 'var(--mute-2)' }
};

// ─── Logo — brand mark (PNG/JPG next to index.html) ───────────────────
const NILOO_LOGO_SRC = 'assets/logo-nifoo.jpg';

function NilooLogo({ size = 64 , scale = 1.42, width, height, style }) {
  const dims = width != null && height != null
    ? { width, height }
    : { height: Math.round(size * scale), width: 'auto' };
  return (
    <img
      src={NILOO_LOGO_SRC}
      alt="ni foo"
      style={{ display: 'block', objectFit: 'contain', ...dims, ...style }}
    />
  );
}

// ─── Main Header ────────────────────────────────────────────────────────────
function Header({ active = 'زن', onSearch, onNav, onSection, onCart }) {
  const [openCat, setOpenCat] = React.useState(null);
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const h = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  const NAV = window.NILOO_DATA.NAV;

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 50, background: 'var(--paper)', borderBottom: scrolled ? '1px solid var(--line)' : '1px solid transparent', transition: 'border-color .2s' }}
      onMouseLeave={() => setOpenCat(null)}>
      <TopBar />
      <div style={hdrStyles.row}>
        <a onClick={() => onNav && onNav('home')} style={{ cursor: 'pointer' }}>
          <NilooLogo size={40} width={240} height={120} />
        </a>
        <nav style={hdrStyles.nav}>
          {NAV.map((n, i) => (
            <a key={i}
              onClick={() => onSection && onSection(n.fa)}
              onMouseEnter={() => setOpenCat(i)}
              style={{ ...hdrStyles.navItem, ...(active === n.fa ? hdrStyles.navItemActive : {}) }}>
              {n.fa}
            </a>
          ))}
          <span style={hdrStyles.sep}>·</span>
          <a style={hdrStyles.navItemSale}>حراج</a>
        </nav>
        <div style={hdrStyles.actions}>
          <button onClick={onSearch} style={hdrStyles.iconBtn} aria-label="جستجو">
            <Icon name="search" />
            <span style={{ fontSize: 13 }}>جستجو</span>
          </button>
          <button style={hdrStyles.iconBtn}><Icon name="user" /></button>
          <button style={hdrStyles.iconBtn}><Icon name="heart" /></button>
          <button type="button" onClick={() => onCart && onCart()} style={hdrStyles.iconBtn} aria-label="سبد خرید">
            <Icon name="bag" />
            <span style={{ fontSize: 13 }}>سبد <span className="num">(۳)</span></span>
          </button>
        </div>
      </div>

      {openCat !== null && (
        <div style={hdrStyles.megaWrap} onMouseEnter={() => setOpenCat(openCat)}>
          <div style={hdrStyles.mega}>
            {NAV[openCat].cats.map((c, j) => (
              <div key={j} style={hdrStyles.megaCol}>
                <div style={hdrStyles.megaTitle}>{c.title}</div>
                {c.items.map((it, k) => <a key={k} style={hdrStyles.megaItem}>{it}</a>)}
              </div>
            ))}
            <div style={hdrStyles.megaPromo}>
              <img src={window.NILOO_DATA.u(window.NILOO_DATA.SHOTS.studio1, 500)} style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover' }} alt="" />
              <div style={{ marginTop: 8 }}>
                <div className="eyebrow">کالکشن جدید</div>
                <div style={{ fontSize: 16, fontWeight: 300, marginTop: 4 }}>پاییز ۱۴۰۵ →</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

const hdrStyles = {
  row: { display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', padding: '0 32px', gap: 32 },
  nav: { display: 'flex', alignItems: 'center', gap: 28, fontSize: 14, justifyContent: 'center' },
  navItem: { padding: '6px 0', cursor: 'pointer', fontWeight: 400, color: 'var(--ink-2)', borderBottom: '1px solid transparent' },
  navItemActive: { borderBottom: '1px solid var(--ink)' },
  navItemSale: { color: 'var(--saffron)', fontWeight: 500, cursor: 'pointer' },
  sep: { color: 'var(--line)' },
  actions: { display: 'flex', alignItems: 'center', gap: 18, justifyContent: 'flex-start' },
  iconBtn: { display: 'flex', alignItems: 'center', gap: 6, padding: 4, color: 'var(--ink)' },
  megaWrap: { position: 'absolute', top: '100%', insetInlineStart: 0, insetInlineEnd: 0, background: 'var(--paper)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', boxShadow: '0 8px 16px -16px rgba(0,0,0,.1)' },
  mega: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr) 280px', gap: 48, padding: '32px 64px 48px' },
  megaCol: { display: 'flex', flexDirection: 'column', gap: 10 },
  megaTitle: { fontSize: 11, letterSpacing: '0.12em', color: 'var(--mute)', textTransform: 'uppercase', marginBottom: 6 },
  megaItem: { fontSize: 14, color: 'var(--ink-2)', cursor: 'pointer', padding: '2px 0' },
  megaPromo: { display: 'flex', flexDirection: 'column' },
};

// ─── Icons ──────────────────────────────────────────────────────────────────
function Icon({ name, size = 18 }) {
  const s = { width: size, height: size, fill: 'none', stroke: 'currentColor', strokeWidth: 1.4 };
  switch (name) {
    case 'search': return <svg viewBox="0 0 24 24" style={s}><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>;
    case 'user': return <svg viewBox="0 0 24 24" style={s}><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4.5 3.5-7 8-7s8 2.5 8 7" /></svg>;
    case 'heart': return <svg viewBox="0 0 24 24" style={s}><path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10z" /></svg>;
    case 'bag': return <svg viewBox="0 0 24 24" style={s}><path d="M5 8h14l-1 12H6L5 8z" /><path d="M9 8a3 3 0 0 1 6 0" /></svg>;
    case 'close': return <svg viewBox="0 0 24 24" style={s}><path d="M6 6l12 12M18 6L6 18" /></svg>;
    case 'arrow-l': return <svg viewBox="0 0 24 24" style={s}><path d="M14 6l-6 6 6 6" /></svg>;
    case 'arrow-r': return <svg viewBox="0 0 24 24" style={s}><path d="M10 6l6 6-6 6" /></svg>;
    case 'plus': return <svg viewBox="0 0 24 24" style={s}><path d="M12 5v14M5 12h14" /></svg>;
    case 'minus': return <svg viewBox="0 0 24 24" style={s}><path d="M5 12h14" /></svg>;
    case 'menu': return <svg viewBox="0 0 24 24" style={s}><path d="M4 7h16M4 12h16M4 17h16" /></svg>;
    case 'filter': return <svg viewBox="0 0 24 24" style={s}><path d="M3 6h18M6 12h12M10 18h4" /></svg>;
    case 'sort': return <svg viewBox="0 0 24 24" style={s}><path d="M7 4v16M7 4l-3 3M7 4l3 3M17 20V4M17 20l-3-3M17 20l3-3" /></svg>;
    case 'zoom': return <svg viewBox="0 0 24 24" style={s}><circle cx="11" cy="11" r="7"/><path d="M9 11h4M11 9v4M20 20l-3.5-3.5"/></svg>;
    case 'share': return <svg viewBox="0 0 24 24" style={s}><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="m8 11 8-4M8 13l8 4"/></svg>;
    default: return null;
  }
}

// ─── Footer ─────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={ftStyles.f}>
      <div style={ftStyles.top}>
        <div style={ftStyles.col}>
          <div style={ftStyles.h}>خبرنامه</div>
          <p style={ftStyles.p}>اولین نفری باشید که از کالکشن‌های جدید و پیشنهادهای ویژه نیلو باخبر می‌شوید.</p>
          <div style={ftStyles.subRow}>
            <input placeholder="ایمیل شما" style={ftStyles.input} />
            <button style={ftStyles.subBtn}>عضویت</button>
          </div>
        </div>
        <div style={ftStyles.col}>
          <div style={ftStyles.h}>کمک</div>
          {['پیگیری سفارش', 'بازگرداندن کالا', 'سایزبندی', 'سؤالات متداول', 'تماس با ما'].map(i => <a key={i} style={ftStyles.l}>{i}</a>)}
        </div>
        <div style={ftStyles.col}>
          <div style={ftStyles.h}>شرکت</div>
          {['درباره نیلو', 'فروشگاه‌ها', 'فرصت‌های شغلی', 'پایداری', 'مطبوعات'].map(i => <a key={i} style={ftStyles.l}>{i}</a>)}
        </div>
        <div style={ftStyles.col}>
          <div style={ftStyles.h}>دنبال کنید</div>
          {['اینستاگرام', 'تلگرام', 'یوتیوب', 'پینترست'].map(i => <a key={i} style={ftStyles.l}>{i}</a>)}
        </div>
      </div>
      <div style={ftStyles.bottom}>
        <div>© ۱۴۰۵ نیلو · تمامی حقوق محفوظ است</div>
        <div style={{ display: 'flex', gap: 16 }}>
          <a>حریم خصوصی</a>
          <a>شرایط استفاده</a>
          <a>کوکی‌ها</a>
        </div>
      </div>
    </footer>
  );
}
const ftStyles = {
  f: { background: 'var(--bone)', marginTop: 96, paddingTop: 64, fontSize: 13 },
  top: { display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 64, padding: '0 64px 48px' },
  col: { display: 'flex', flexDirection: 'column', gap: 8 },
  h: { fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink)', marginBottom: 12, fontWeight: 500 },
  p: { color: 'var(--mute)', lineHeight: 1.7, marginBottom: 12 },
  l: { color: 'var(--ink-2)', cursor: 'pointer', padding: '3px 0' },
  subRow: { display: 'flex', gap: 0, borderBottom: '1px solid var(--ink)' },
  input: { flex: 1, border: 0, padding: '10px 0', background: 'transparent', outline: 'none', fontSize: 13 },
  subBtn: { padding: '10px 16px', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 500 },
  bottom: { borderTop: '1px solid var(--line)', padding: '20px 64px', display: 'flex', justifyContent: 'space-between', color: 'var(--mute)', fontSize: 12 },
};

// expose
Object.assign(window, { TopBar, Header, Footer, Icon, NilooLogo });
