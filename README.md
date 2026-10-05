# Bektemirov Hojiakbar — Shaxsiy Portfolio Veb-sayti 🚀

Frontend dasturchi **Bektemirov Hojiakbar**ning to'liq, professional va zamonaviy shaxsiy portfolio veb-sayti.

Sayt React, Vite, Tailwind CSS va Framer Motion texnologiyalarida yaratilgan bo'lib, Dark/Light mode, ko'p tillilik (O'zbek va Ingliz tillari), to'liq responsive dizayn va zamonaviy interaktiv effektlarga ega.

---

## 📸 O'z rasmingizni qo'yish bo'yicha ko'rsatma

Portfolio veb-saytida o'zingizning haqiqiy suratingizni ko'rsatish juda oson:

1. **Surat tayyorlang:** O'zingizning chiroyli, sifatli portret fotosuratingizni tanlang (`.jpg` yoki `.png` formatda).
2. **Nomini o'zgartiring:** Fayl nomini `profile.jpg` deb o'zgartiring.
3. **Papkaga joylang:** Ushbu faylni loyihadagi `public/` papkasi ichiga tashlang (mavjud `public/profile.jpg` o'rniga almashtiring):
   ```bash
   portifolio/
   ├── public/
   │   ├── profile.jpg   <-- Sizning rasmingiz shu yerda bo'ladi!
   │   └── vite.svg
   ```
4. **Natijani ko'ring:** Brauzerda sahifani yangilang (`F5` yoki `Ctrl+R`), darhol sizning shaxsiy suratingiz saytda ko'rinadi!

---

## 🛠 Texnologiyalar to'plami (Tech Stack)

- **Asos:** React 18 (Vite bilan — o'ta tezkor yig'uvchi)
- **Stillar:** Tailwind CSS (zamonaviy utilita klasslari, to'liq dark mode)
- **Animatsiyalar:** Framer Motion (silliq scroll-reveal va hover effektlari)
- **Ko'p tillilik (i18n):** `react-i18next` (O'zbek va Ingliz tillari, tanlov avtomatik `localStorage`da saqlanadi)
- **Ikonkalar:** Lucide Icons (`lucide-react`)
- **Shriftlar:** Google Fonts — Inter

---

## 📁 Loyiha Strukturasi

```text
portifolio/
├── public/
│   ├── profile.jpg          # Profil rasmi (o'zingiznikiga almashtirishingiz mumkin)
│   ├── cv.pdf               # TODO: O'z CV faylingizni shu nom bilan joylang
│   └── vite.svg             # Sayt ikonkasi (favicon)
├── src/
│   ├── components/          # Barcha UI komponentlar
│   │   ├── Navbar.jsx       # Sticky navigatsiya, til va mavzu almashinuvi
│   │   ├── Hero.jsx         # Bosh sahifa, sarlavhalar, rasm, CTA tugmalar
│   │   ├── About.jsx        # Shaxsiy ma'lumotlar, manzil, yosh va futbol qiziqishi
│   │   ├── Skills.jsx       # HTML5, CSS3, JavaScript, React kartalari
│   │   ├── Experience.jsx   # IT Live Academy ta'lim bosqichlari timeline
│   │   ├── Projects.jsx     # 6 ta amaliy loyiha (Live Demo + GitHub)
│   │   ├── Blog.jsx         # 3 ta maqola va to'liq o'qish modali
│   │   ├── Contact.jsx      # Aloqa formasi va to'g'ridan-to'g'ri bog'lanish
│   │   └── Footer.jsx       # Mualliflik huquqi va havolalar
│   ├── data/                # Barcha real ma'lumotlar (hardcoded emas)
│   │   ├── projects.js      # 6 ta loyiha ma'lumotlari
│   │   ├── experience.js    # Ta'lim ma'lumotlari
│   │   ├── skills.js        # Texnik bilimlar
│   │   ├── socials.js       # Shaxsiy va ijtimoiy kontaktlar
│   │   └── blogs.js         # Blog maqolalari
│   ├── context/
│   │   └── ThemeContext.jsx # Dark / Light mavzu boshqaruvi
│   ├── locales/
│   │   ├── uz.json          # O'zbekcha tarjimalar
│   │   ├── en.json          # Inglizcha tarjimalar
│   │   └── i18n.js          # i18next konfiguratsiyasi
│   ├── App.jsx              # Asosiy sahifa komponenti
│   ├── main.jsx             # React kirish nuqtasi
│   └── index.css            # Tailwind va maxsus stillar
├── index.html               # SEO meta teglari bilan bosh HTML
├── package.json             # Loyiha qaramliklari
├── tailwind.config.js       # Tailwind sozlamalari
└── vite.config.js           # Vite sozlamalari
```

---

## ⚡ O'rnatish va Ishga tushirish

Loyihani kompyuteringizda ishga tushirish uchun quyidagi buyruqlarni bajaring:

### 1. Qaramliklarni o'rnatish
```bash
npm install
```

### 2. Loyihani mahalliydan ishga tushirish (Development server)
```bash
npm run dev
```

Buyruq bajarilgach, terminalda quyidagi havola chiqadi:
`http://localhost:3000` (yoki `5173`) — brauzeringizda ushbu manzilni oching.

### 3. Production uchun yig'ish (Build)
```bash
npm run build
```

---

## 📌 TODO Eslatmalar (Kelgusida to'ldirish kerak bo'lgan joylar)

1. **Telegram username:**
   - Fayl: `src/data/socials.js`
   - Telegram linkini o'z profilingizga o'zgartiring (masalan: `https://t.me/username`).

2. **LinkedIn:**
   - Fayl: `src/data/socials.js`
   - Agar LinkedIn ochsangiz, havolasini kiriting. Hozircha bo'sh qoldirilgan.

3. **CV / Resume fayli:**
   - CV tayyorlagach, uni `cv.pdf` nomi bilan `public/` papkasiga joylang: `public/cv.pdf`.

4. **Loyihalar GitHub repolari:**
   - Fayl: `src/data/projects.js`
   - 5-loyiha (Akademnashr) aniq repo linkiga ega. Qolgan loyihalarning aniq repo havolalari ma'lum bo'lganda `github:` qatoriga yozib qo'yishingiz mumkin.

---

## 👤 Muallif
- **Bektemirov Hojiakbar**
- Email: [said271275@gmail.com](mailto:said271275@gmail.com)
- GitHub: [@said271275-hub](https://github.com/said271275-hub)
