// Search overlay — sticky live results, recent searches, popular categories

function ScreenSearch({ onClose, onProduct }) {
  const D = window.NILOO_DATA;
  const [q, setQ] = React.useState('پیراهن');

  const matches = D.PRODUCTS.filter(p =>
    !q || p.name.includes(q) || p.cat.includes(q)
  ).slice(0, 6);

  return (
    <div style={{ minHeight: '100vh', background: 'var(--paper)' }}>
      {/* Search bar */}
      <div style={ss.bar}>
        <Icon name="search" size={20} />
        <input autoFocus value={q} onChange={(e) => setQ(e.target.value)}
          placeholder="جستجو در نیلو" style={ss.input} />
        <button onClick={onClose} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13 }}>
          بستن <Icon name="close" size={18} />
        </button>
      </div>

      <div style={ss.body}>
        {/* Suggestions column */}
        <aside style={ss.col}>
          <div className="eyebrow" style={{ marginBottom: 16 }}>جستجوهای پرطرفدار</div>
          <ul style={ss.list}>
            {['پالتو پشمی', 'پیراهن میدی', 'تی‌شرت پایه', 'مانتو رسمی', 'بوت چرم', 'دامن پلیسه'].map(t => (
              <li key={t} style={ss.li} onClick={() => setQ(t)}>{t}</li>
            ))}
          </ul>

          <div className="eyebrow" style={{ marginTop: 40, marginBottom: 16 }}>جستجوهای اخیر شما</div>
          <ul style={ss.list}>
            {['پالتو', 'کت بلیزر مشکی'].map(t => (
              <li key={t} style={{ ...ss.li, display: 'flex', justifyContent: 'space-between' }} onClick={() => setQ(t)}>
                <span>{t}</span><span style={{ color: 'var(--mute-2)' }}>×</span>
              </li>
            ))}
          </ul>
        </aside>

        {/* Results grid */}
        <main>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 24 }}>
            <div>
              <div className="eyebrow">نتایج برای «{q}»</div>
              <div style={{ fontSize: 13, color: 'var(--mute)', marginTop: 4 }} className="num">{matches.length} مورد</div>
            </div>
            <a style={{ fontSize: 13, borderBottom: '1px solid var(--ink)', cursor: 'pointer' }}>مشاهده همه نتایج ←</a>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px 16px' }}>
            {matches.map(p => <ProductCard key={p.id} p={p} onClick={() => onProduct && onProduct(p)} />)}
          </div>
        </main>
      </div>
    </div>
  );
}

const ss = {
  bar: { display: 'flex', alignItems: 'center', gap: 16, padding: '20px 64px', borderBottom: '1px solid var(--line)' },
  input: { flex: 1, border: 0, outline: 0, fontSize: 24, fontWeight: 200, fontFamily: 'var(--font-display)', background: 'transparent' },
  body: { display: 'grid', gridTemplateColumns: '260px 1fr', gap: 64, padding: '40px 64px' },
  col: {},
  list: { listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 4 },
  li: { fontSize: 14, padding: '8px 0', cursor: 'pointer', borderBottom: '1px solid var(--line-2)' },
};

Object.assign(window, { ScreenSearch });
