// Product card with hover-to-swap image, plus shared bits used in PLP and home grids

function ProductCard({ p, size = 'md', onClick }) {
  const [hover, setHover] = React.useState(false);
  const [liked, setLiked] = React.useState(false);
  return (
    <div style={pcStyles.card} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <div style={pcStyles.imgWrap} onClick={onClick}>
        <img src={p.main} style={{ ...pcStyles.img, opacity: hover ? 0 : 1 }} alt={p.name} />
        <img src={p.hover} style={{ ...pcStyles.img, opacity: hover ? 1 : 0 }} alt="" />

        {/* Tags */}
        <div style={pcStyles.tags}>
          {p.isNew && <span style={pcStyles.tagNew}>جدید</span>}
          {p.sale && <span style={pcStyles.tagSale}>حراج</span>}
        </div>

        {/* Wishlist */}
        <button style={{ ...pcStyles.wish, opacity: hover || liked ? 1 : 0 }}
          onClick={(e) => { e.stopPropagation(); setLiked(!liked); }}>
          <svg viewBox="0 0 24 24" width="16" height="16" fill={liked ? 'var(--ink)' : 'none'} stroke="currentColor" strokeWidth="1.4">
            <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10z" />
          </svg>
        </button>

        {/* Quick add — slides up on hover */}
        <div style={{ ...pcStyles.quickAdd, transform: hover ? 'translateY(0)' : 'translateY(100%)' }}>
          <div style={pcStyles.qaSizes}>
            {p.sizes.map(s => <button key={s} style={pcStyles.qaSize} onClick={(e) => e.stopPropagation()}>{s}</button>)}
          </div>
        </div>
      </div>

      <div style={pcStyles.meta}>
        <div style={pcStyles.name}>{p.name}</div>
        <div style={pcStyles.row}>
          {p.sale ? (
            <>
              <span style={{ ...pcStyles.price, color: 'var(--saffron)' }} className="num">{p.price} <span style={pcStyles.toman}>تومان</span></span>
              <span style={pcStyles.priceOld} className="num">{p.oldPrice}</span>
            </>
          ) : (
            <span style={pcStyles.price} className="num">{p.price} <span style={pcStyles.toman}>تومان</span></span>
          )}
        </div>
        <div style={pcStyles.colorRow}>{p.color}</div>
      </div>
    </div>
  );
}

const pcStyles = {
  card: { display: 'flex', flexDirection: 'column' },
  imgWrap: { position: 'relative', aspectRatio: '3/4', overflow: 'hidden', background: 'var(--bone)', cursor: 'pointer' },
  img: { position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', transition: 'opacity .4s ease' },
  tags: { position: 'absolute', insetInlineStart: 12, top: 12, display: 'flex', flexDirection: 'column', gap: 4, zIndex: 2 },
  tagNew: { background: 'var(--paper)', padding: '4px 8px', fontSize: 10, letterSpacing: '0.1em', fontWeight: 500 },
  tagSale: { background: 'var(--saffron)', color: 'white', padding: '4px 8px', fontSize: 10, letterSpacing: '0.1em', fontWeight: 500 },
  wish: { position: 'absolute', insetInlineEnd: 12, top: 12, width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,.85)', backdropFilter: 'blur(4px)', transition: 'opacity .2s', zIndex: 2 },
  quickAdd: { position: 'absolute', insetInlineStart: 0, insetInlineEnd: 0, bottom: 0, background: 'rgba(255,255,255,.94)', backdropFilter: 'blur(6px)', padding: 12, transition: 'transform .25s ease', zIndex: 2 },
  qaSizes: { display: 'flex', gap: 6, justifyContent: 'space-between' },
  qaSize: { flex: 1, padding: '8px 0', fontSize: 12, fontWeight: 500, border: '1px solid transparent', transition: 'border-color .15s' },
  meta: { padding: '12px 0 4px', display: 'flex', flexDirection: 'column', gap: 2 },
  name: { fontSize: 13, color: 'var(--ink)', lineHeight: 1.5 },
  row: { display: 'flex', gap: 10, alignItems: 'baseline', marginTop: 2 },
  price: { fontSize: 13, color: 'var(--ink)' },
  toman: { fontSize: 11, color: 'var(--mute)', marginInlineStart: 2 },
  priceOld: { fontSize: 12, color: 'var(--mute)', textDecoration: 'line-through' },
  colorRow: { fontSize: 11, color: 'var(--mute)', marginTop: 2 },
};

// Hover-active styles via injected CSS (cleaner than JS)
if (!document.getElementById('pc-hover-css')) {
  const st = document.createElement('style');
  st.id = 'pc-hover-css';
  st.textContent = `
    [data-qasize]:hover { border-color: var(--ink) !important; }
  `;
  document.head.appendChild(st);
}

Object.assign(window, { ProductCard });
