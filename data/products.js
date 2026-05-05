// Niloo — product & content data (Persian)
// All imagery uses Unsplash editorial fashion shots as placeholders.

window.NILOO_DATA = (() => {
  const u = (id, w = 800) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

  const NAV = [
    { fa: 'زن', en: 'WOMAN', cats: [
      { title: 'جدید', items: ['تازه‌رسیده‌ها', 'پرفروش‌ترین', 'منتخب سردبیر', 'تماماً مشکی'] },
      { title: 'لباس', items: ['پیراهن', 'مانتو و ژاکت', 'پالتو', 'بلوز و شومیز', 'تی‌شرت', 'شلوار', 'دامن', 'جین'] },
      { title: 'کالکشن', items: ['پاییز ۱۴۰۵', 'مینیمال', 'مهمانی', 'کار و دفتر', 'سفر'] },
      { title: 'لوازم جانبی', items: ['کیف', 'کفش', 'روسری و شال', 'عینک', 'جواهرات'] },
    ]},
    { fa: 'مرد', en: 'MAN', cats: [
      { title: 'جدید', items: ['تازه‌رسیده‌ها', 'پرفروش‌ترین', 'منتخب سردبیر'] },
      { title: 'لباس', items: ['پیراهن', 'تی‌شرت', 'سویشرت', 'کت و شلوار', 'شلوار', 'جین', 'پالتو'] },
      { title: 'کالکشن', items: ['پاییز ۱۴۰۵', 'مینیمال', 'دنیم', 'تیلورد'] },
      { title: 'لوازم جانبی', items: ['کفش', 'کیف', 'کمربند', 'عینک', 'ساعت'] },
    ]},
    { fa: 'کفش و کیف', en: 'SHOES & BAGS', cats: [
      { title: 'جدید', items: ['تازه‌رسیده‌ها', 'فصل پاییز'] },
      { title: 'کیف', items: ['کیف دستی', 'کیف دوشی', 'کیف کوچک', 'کیف کار'] },
      { title: 'کفش', items: ['بوت', 'لوفر', 'کتانی', 'صندل'] },
      { title: 'اکسسوری', items: ['کمربند', 'عینک', 'روسری و شال', 'جواهرات'] },
    ]},
  ];

  // Editorial fashion photos — neutral, high-fashion, Zara-adjacent
  const SHOTS = {
    heroW: '1490481651871-ab68de25d43d',  // woman editorial
    heroM: '1521572163474-6864f9cf17ab',  // man editorial
    heroH: '1483985988355-763728e1935b',  // accessories editorial
    p1: '1483985988355-763728e1935b',
    p2: '1539109136881-3be0616acf4b',
    p3: '1551803091-e20673f15770',
    p4: '1485518882345-15568b007407',
    p5: '1496747611176-843222e1e57c',
    p6: '1469334031218-e382a71b716b',
    p7: '1581044777550-4cfa60707c03',
    p8: '1572804013309-59a88b7e92f1',
    p9: '1434389677669-e08b4cac3105',
    p10: '1542295669297-4d352b042bca',
    p11: '1552374196-1ab2a1c593e8',
    p12: '1507003211169-0a1dd7228f2d',
    home1: '1493663284031-b7e3aefcae8e',
    home2: '1522708323590-d24dbb6b0267',
    home3: '1567538096630-e0c55bd6374c',
    home4: '1540574163026-643ea20ade25',
    studio1: '1487222477894-8943e31ef7b2',
    studio2: '1496747611176-843222e1e57c',
  };

  // Helper: build product
  const P = (id, name, price, mainShot, hoverShot, cat, opts = {}) => ({
    id, name, price, main: u(mainShot, 700), hover: u(hoverShot, 700), cat,
    sale: opts.sale, oldPrice: opts.oldPrice,
    color: opts.color || 'مشکی',
    sizes: opts.sizes || ['XS', 'S', 'M', 'L', 'XL'],
    isNew: opts.isNew,
  });

  const PRODUCTS = [
    P('w-001', 'پالتوی پشمی بلند', '۴٬۸۹۰٬۰۰۰', SHOTS.p1, SHOTS.p2, 'پالتو', { isNew: true, color: 'کرم' }),
    P('w-002', 'پیراهن ساتن میدی', '۲٬۳۹۰٬۰۰۰', SHOTS.p3, SHOTS.p4, 'پیراهن', { color: 'یشمی' }),
    P('w-003', 'بلوز ابریشمی یقه‌گرد', '۱٬۸۹۰٬۰۰۰', SHOTS.p5, SHOTS.p6, 'بلوز و شومیز', { color: 'سفید' }),
    P('w-004', 'شلوار پارچه‌ای فاق بلند', '۱٬۹۹۰٬۰۰۰', SHOTS.p7, SHOTS.p8, 'شلوار', { color: 'مشکی' }),
    P('w-005', 'مانتو رسمی تک‌جیبه', '۳٬۲۹۰٬۰۰۰', SHOTS.p9, SHOTS.p10, 'مانتو و ژاکت', { sale: true, oldPrice: '۳٬۹۹۰٬۰۰۰', color: 'زغالی' }),
    P('w-006', 'دامن میدی پلیسه', '۱٬۶۹۰٬۰۰۰', SHOTS.p11, SHOTS.p12, 'دامن', { color: 'کرم', isNew: true }),
    P('w-007', 'پیراهن دنیم اورسایز', '۲٬۱۹۰٬۰۰۰', SHOTS.p2, SHOTS.p1, 'پیراهن', { color: 'آبی روشن' }),
    P('w-008', 'تی‌شرت نخی پایه', '۶۹۰٬۰۰۰', SHOTS.p4, SHOTS.p3, 'تی‌شرت', { color: 'سفید' }),
    P('w-009', 'کت بلیزر ساختاری', '۴٬۱۹۰٬۰۰۰', SHOTS.p6, SHOTS.p5, 'مانتو و ژاکت', { color: 'مشکی' }),
    P('w-010', 'شلوار جین فاق متوسط', '۱٬۸۹۰٬۰۰۰', SHOTS.p8, SHOTS.p7, 'جین', { color: 'آبی تیره' }),
    P('w-011', 'پیراهن چرم مصنوعی', '۲٬۹۹۰٬۰۰۰', SHOTS.p10, SHOTS.p9, 'پیراهن', { sale: true, oldPrice: '۳٬۹۹۰٬۰۰۰', color: 'مشکی' }),
    P('w-012', 'بلوز یقه‌اسکی نخی', '۹۹۰٬۰۰۰', SHOTS.p12, SHOTS.p11, 'بلوز و شومیز', { color: 'کرم', isNew: true }),
  ];

  return { NAV, SHOTS, PRODUCTS, u };
})();
