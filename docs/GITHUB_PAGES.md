# دیپلوی روی GitHub Pages — مرحله‌به‌مرحله

این پروژه یک سایت **استاتیک** است؛ ورودی سایت فایل **`index.html`** در ریشهٔ ریپو است. فایل **`.nojekyll`** هم اضافه شده تا GitHub سایت را با Jekyll پردازش نکند و مسیرها به‌هم نریزد.

---

## پیش‌نیاز

- حساب [GitHub](https://github.com)
- [Git](https://git-scm.com/) روی کامپیوتر (یا استفاده از GitHub Desktop)

---

## مرحله ۱ — ریپوی خالی بساز

1. به GitHub برو → **New repository**
2. نام بگذار (مثلاً `Niloo-Design`)
3. **Public** بماند (GitHub Pages برای رایگانِ عمومی راحت‌تر است)
4. **بدون** README اگر می‌خواهی بعداً پوش کنی؛ یا با README فرقی برای Pages ندارد
5. **Create repository**

یادت بماند **نام ریپو** چیست؛ آدرس سایت بعداً می‌شود:

`https://<نام‌کاربری>.github.io/<نام‌ریپو>/`

---

## مرحله ۲ — کد را به ریپو برسان

در پوشهٔ پروژه روی کامپیوتر (همان جایی که `index.html` است):

```bash
git init
git add .
git commit -m "Initial Niloo design demo"
git branch -M main
git remote add origin https://github.com/<USERNAME>/<REPO>.git
git push -u origin main
```

`<USERNAME>` و `<REPO>` را با خودت عوض کن.

---

## مرحله ۳ — GitHub Pages را روشن کن

1. روی GitHub برو به همان ریپو
2. **Settings** (تنظیمات ریپو)
3. از منوی چپ **Pages**
4. زیر **Build and deployment** → **Source** را بگذار **Deploy from a branch**
5. **Branch**: `main` ، پوشه: **`/ (root)`**
6. **Save**

چند دقیقه صبر کن؛ بعد در همان صفحهٔ Pages یک پیام سبز با **آدرس سایت** می‌بینی (یا از این قالب استفاده کن):

`https://<USERNAME>.github.io/<REPO>/`

---

## مرحله ۴ — چک کن که باز می‌شود

1. همان URL را در مرورگر باز کن؛ باید دمو نیلو را ببینی.
2. اگر **صفحه خالی** بود:
   - یک بار **Hard refresh** (Ctrl+F5)
   - مطمئن شو در ریشهٔ ریپو واقعاً **`index.html`** وجود دارد.
3. اگر **۴۰۴** بود:
   - چند دقیقه دیگر امتحان کن (اولین بار گاهی تأخیر دارد)
   - مطمئن شو branch درست **`main`** است و پوش انجام شده.

---

## مرحله ۵ — هر بار که تغییر می‌دهی

```bash
git add .
git commit -m "توضیح کوتاه تغییر"
git push
```

GitHub Pages بعد از چند ثانیه تا یک دقیقه خودش نسخهٔ جدید را سرو می‌کند.

---

## نکات مهم

| موضوع | توضیح |
|--------|--------|
| مسیرها | همهٔ آدرس‌ها **نسبی** هستند؛ برای آدرس `…github.io/<REPO>/` معمولاً مشکلی پیش نمی‌آید. |
| دامنهٔ خود مشتری | در **Settings → Pages → Custom domain** می‌توانی دامنه بگذاری و طبق راهنمای GitHub DNS را تنظیم کنی. |
| خصوصی | ریپوی Private با GitHub Free برای Pages محدودیت دارد؛ برای مشتری معمولاً **Public** یا پلن مناسب لازم است. |

---

## اگر می‌خواهی بعداً CI/CD با GitHub Actions اضافه کنی

الان لازم نیست؛ «Deploy from branch» برای همین پروژه کافی است. اگر بعداً بیلد (مثلاً Vite) داشتی، می‌توان یک workflow گذاشت که خروجی `dist` را به `gh-pages` بفرستد.

---

## فایل‌های مرتبط در این ریپو

- `index.html` — ورود سایت (برای GitHub Pages ضروری بود؛ قبلاً نام دیگری داشت)
- `.nojekyll` — غیرفعال کردن Jekyll روی Pages
