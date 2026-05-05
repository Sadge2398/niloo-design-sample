// PLP — category listing with filter sidebar, sort dropdown, hover-swap grid

function ScreenPLP({ onProduct }) {
  const D = window.NILOO_DATA;
  const [sort, setSort] = React.useState('پیشنهاد ما');
  const [openSort, setOpenSort] = React.useState(false);
  const [view, setView] = React.useState(4); // grid columns
  const [filtersOpen, setFiltersOpen] = React.useState(true);

  // duplicate to fill grid
  const items = [...D.PRODUCTS, ...D.PRODUCTS].slice(0, 16);

  return (
    <div>
      {/* Breadcrumb + heading */}
      <div style={plp.head}>
        <div style={{ fontSize: 11, color: 'var(--mute)', letterSpacing: '0.06em', marginBottom: 8 }}>
          زن  /  لباس  /  <span style={{ color: 'var(--ink)' }}>پیراهن</span>
        </div>
        <h1 style={{ fontSize: 36, fontWeight: 200, letterSpacing: '0.01em' }}>پیراهن زنانه</h1>
        <div style={{ fontSize: 13, color: 'var(--mute)', marginTop: 8 }} className="num">۱۲۸ کالا</div>
      </div>

      {/* Toolbar */}
      <div style={plp.toolbar}>
        <button onClick={() => setFiltersOpen(!filtersOpen)} style={plp.tBtn}>
          <Icon name="filter" size={16} /> فیلترها
        </button>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={plp.viewSwitch}>
            {[2, 4].map(v => (
              <button key={v} onClick={() => setView(v)}
                style={{ ...plp.viewBtn, color: view === v ? 'var(--ink)' : 'var(--mute-2)' }}>
                <ViewIcon n={v} />
              </button>
            ))}
          </div>
          <div style={{ position: 'relative' }}>
            <button onClick={() => setOpenSort(!openSort)} style={plp.tBtn}>
              مرتب‌سازی: <span style={{ color: 'var(--ink)' }}>{sort}</span>
              <span style={{ transform: openSort ? 'rotate(180deg)' : '', transition: 'transform .15s', display: 'inline-block' }}>⌄</span>
            </button>
            {openSort && (
              <div style={plp.sortDrop}>
                {['پیشنهاد ما', 'جدیدترین', 'ارزان‌ترین', 'گران‌ترین', 'پرفروش‌ترین'].map(o => (
                  <button key={o} onClick={() => { setSort(o); setOpenSort(false); }} style={plp.sortItem}>
                    {o}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div style={{ ...plp.body, gridTemplateColumns: filtersOpen ? '240px 1fr' : '1fr' }}>
        {filtersOpen && (
          <aside style={plp.filters}>
            <FilterGroup title="دسته‌بندی" items={['پیراهن کوتاه', 'پیراهن میدی', 'پیراهن بلند', 'پیراهن مجلسی', 'پیراهن آستین‌بلند']} />
            <FilterGroup title="سایز" items={['XS', 'S', 'M', 'L', 'XL', 'XXL']} chips />
            <FilterGroup title="رنگ" colors={[
              { n: 'مشکی', c: '#1a1a1a' },{ n: 'سفید', c: '#ffffff' },{ n: 'کرم', c: '#e8dfcf' },
              { n: 'یشمی', c: '#5b6a4f' },{ n: 'زغالی', c: '#3a3a3a' },{ n: 'آبی', c: '#3b4d6b' },
              { n: 'قهوه‌ای', c: '#7a4f33' },{ n: 'صورتی', c: '#d8a8a3' },
            ]} />
            <FilterGroup title="جنس پارچه" items={['پنبه', 'ابریشم', 'پشم', 'کتان', 'ویسکوز', 'پلی‌استر']} />
            <FilterGroup title="قیمت" range />
          </aside>
        )}

        <main style={{ padding: '0 64px 64px 64px', paddingInlineStart: filtersOpen ? 32 : 64 }}>
          <div style={{ display: 'grid', gridTemplateColumns: `repeat(${view}, 1fr)`, gap: '40px 16px' }}>
            {items.map((p, i) => <ProductCard key={i} p={p} onClick={() => onProduct && onProduct(p)} />)}
          </div>
          {/* Pagination */}
          <div style={{ marginTop: 64, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
            <div style={{ width: 280, height: 1, background: 'var(--line)', position: 'relative' }}>
              <div style={{ position: 'absolute', top: 0, insetInlineStart: 0, height: 1, width: '40%', background: 'var(--ink)' }} />
            </div>
            <div style={{ fontSize: 12, color: 'var(--mute)' }} className="num">۴۸ از ۱۲۸ کالا</div>
            <button style={{ marginTop: 8, padding: '14px 36px', border: '1px solid var(--ink)', fontSize: 12, letterSpacing: '0.14em', fontWeight: 500 }}>
              نمایش بیشتر
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

function FilterGroup({ title, items, chips, colors, range }) {
  const [open, setOpen] = React.useState(true);
  const [sel, setSel] = React.useState(new Set());
  const toggle = (k) => { const n = new Set(sel); n.has(k) ? n.delete(k) : n.add(k); setSel(n); };
  return (
    <div style={fg.wrap}>
      <button onClick={() => setOpen(!open)} style={fg.head}>
        <span>{title}</span>
        <Icon name={open ? 'minus' : 'plus'} size={14} />
      </button>
      {open && (
        <div style={fg.body}>
          {chips && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {items.map(i => (
                <button key={i} onClick={() => toggle(i)} style={{ ...fg.chip, ...(sel.has(i) ? fg.chipOn : {}) }}>{i}</button>
              ))}
            </div>
          )}
          {colors && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {colors.map(c => (
                <button key={c.n} onClick={() => toggle(c.n)} title={c.n}
                  style={{ ...fg.swatch, background: c.c, outline: sel.has(c.n) ? '1px solid var(--ink)' : '1px solid var(--line)', outlineOffset: sel.has(c.n) ? 2 : 0 }} />
              ))}
            </div>
          )}
          {range && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: 'var(--mute)', marginBottom: 8 }} className="num">
                <span>۵۰۰٬۰۰۰</span><span>۸٬۰۰۰٬۰۰۰</span>
              </div>
              <div style={{ height: 1, background: 'var(--line)', position: 'relative' }}>
                <div style={{ position: 'absolute', insetInlineStart: '12%', insetInlineEnd: '32%', height: 1, background: 'var(--ink)' }} />
                <div style={{ position: 'absolute', insetInlineStart: '12%', top: -4, width: 9, height: 9, background: 'var(--ink)', borderRadius: '50%' }} />
                <div style={{ position: 'absolute', insetInlineEnd: '32%', top: -4, width: 9, height: 9, background: 'var(--ink)', borderRadius: '50%' }} />
              </div>
            </div>
          )}
          {!chips && !colors && !range && items.map(i => (
            <label key={i} style={fg.row}>
              <input type="checkbox" checked={sel.has(i)} onChange={() => toggle(i)} style={fg.cb} />
              <span>{i}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

function ViewIcon({ n }) {
  const cells = Array(n).fill(0);
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
      {cells.map((_, i) => <rect key={i} x={i * (18/n) + 1} y="2" width={(18/n) - 2} height="14" />)}
    </svg>
  );
}

const plp = {
  head: { padding: '32px 64px 24px' },
  toolbar: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 64px', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' },
  tBtn: { display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--ink-3)', padding: '6px 0' },
  viewSwitch: { display: 'flex', gap: 8, paddingInlineEnd: 16, borderInlineEnd: '1px solid var(--line)' },
  viewBtn: { padding: 4 },
  sortDrop: { position: 'absolute', top: '100%', insetInlineEnd: 0, marginTop: 8, background: 'var(--paper)', border: '1px solid var(--line)', minWidth: 200, zIndex: 20, boxShadow: '0 8px 24px -12px rgba(0,0,0,.1)' },
  sortItem: { display: 'block', width: '100%', textAlign: 'right', padding: '12px 16px', fontSize: 13, borderBottom: '1px solid var(--line-2)' },
  body: { display: 'grid', gap: 0, marginTop: 32 },
  filters: { padding: '0 0 0 32px', paddingInlineStart: 64, paddingInlineEnd: 0, display: 'flex', flexDirection: 'column' },
};

const fg = {
  wrap: { borderBottom: '1px solid var(--line)' },
  head: { width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 0', fontSize: 13, fontWeight: 500 },
  body: { paddingBottom: 20, display: 'flex', flexDirection: 'column', gap: 8 },
  row: { display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--ink-3)', cursor: 'pointer', padding: '3px 0' },
  cb: { accentColor: '#0a0a0a' },
  chip: { padding: '7px 14px', fontSize: 12, border: '1px solid var(--line)', background: 'transparent' },
  chipOn: { borderColor: 'var(--ink)', background: 'var(--ink)', color: 'white' },
  swatch: { width: 22, height: 22, borderRadius: '50%', cursor: 'pointer' },
};

Object.assign(window, { ScreenPLP });
