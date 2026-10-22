# Dr. Khalid Khan Zadran — Professional Neurosurgery Website

A modern, responsive medical website for **Dr. Khalid Khan Zadran**, Consultant Neurosurgeon
(Brain & Spine Surgery) at Rifah Medical Complex, Kabul, Afghanistan.

Built with **React + Vite**, styled with **Tailwind CSS**, routed with **React Router DOM**,
animated with **Framer Motion**, and validated with **React Hook Form**.

---

## 1. Getting started

### Prerequisites

- Node.js 18 or newer (tested on Node 22)
- npm 9 or newer

### Installation

```bash
npm install
```

### Development server

```bash
npm run dev
```

The site runs at **http://localhost:5173**.

### Production build

```bash
npm run build     # outputs to dist/
npm run preview   # serve the production build locally (port 4173)
```

---

## 2. Project structure

```
├── index.html                  # HTML shell, fonts, SEO/Open Graph tags
├── package.json
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind theme: colours, typography, shadows
├── postcss.config.js
├── public/
│   ├── favicon.svg             # Site branding / favicon
│   ├── robots.txt              # Crawl rules (replace the domain before launch)
│   └── sitemap.xml             # Sitemap (replace the domain before launch)
└── src/
    ├── assets/images/          # Local image placeholders (SVG)
    ├── components/
    │   ├── Navbar.jsx          # Sticky nav + accessible mobile menu
    │   ├── Footer.jsx          # Four-column footer, dynamic year
    │   ├── Hero.jsx            # Homepage hero
    │   ├── SectionTitle.jsx
    │   ├── PageHeader.jsx      # Shared inner-page banner
    │   ├── ServiceCard.jsx     # Specialty card
    │   ├── QualificationCard.jsx
    │   ├── AppointmentForm.jsx # Validated appointment request form
    │   ├── FAQAccordion.jsx    # Accessible accordion
    │   ├── BlogCard.jsx
    │   ├── CallToAction.jsx
    │   ├── Reveal.jsx          # Scroll reveal (reduced-motion aware)
    │   ├── SafeImage.jsx       # Image with graceful fallback
    │   ├── Icon.jsx            # Icon-name → Lucide component mapper
    │   └── ScrollToTop.jsx     # Focus/reset behaviour on route change
    ├── data/
    │   ├── doctor.js           # Profile, qualifications, memberships, contact
    │   ├── services.js         # 8 neurosurgical specialty categories
    │   ├── treatments.js       # Brain / spine / consultation categories
    │   ├── faqs.js             # 9 frequently asked questions
    │   ├── articles.js         # 7 medical education articles
    │   └── gallery.js          # Gallery items (placeholders)
    ├── hooks/
    │   └── usePageMeta.js      # Per-page title + meta description
    ├── pages/
    │   ├── Home.jsx  About.jsx  Specialties.jsx  Treatments.jsx
    │   ├── PatientInformation.jsx  Blog.jsx  BlogDetails.jsx
    │   ├── Contact.jsx  Gallery.jsx  FAQ.jsx
    │   ├── PrivacyPolicy.jsx  MedicalDisclaimer.jsx  NotFound.jsx
    ├── App.jsx                 # Routes + scroll/focus handling
    ├── main.jsx                # Entry point (BrowserRouter)
    └── index.css               # Tailwind layers + shared component classes
```

---

## 3. Pages and routes

| Route                  | Page                     | Purpose                                        |
| ---------------------- | ------------------------ | ---------------------------------------------- |
| `/`                    | Home                     | Hero, highlights, about, specialties, FAQs      |
| `/about`               | About Doctor             | Biography, qualifications, memberships          |
| `/specialties`         | Specialties              | 8 neurosurgical service cards                   |
| `/treatments`          | Treatments & Procedures  | Brain, spine and consultation categories        |
| `/patient-information` | Patient Information      | Before / during / after checklists + emergency  |
| `/blog`                | Blog                     | Filterable medical education articles           |
| `/blog/:slug`          | Blog Details             | Full article + related articles                 |
| `/contact`             | Contact                  | Appointment request form + clinic details       |
| `/gallery`             | Gallery                  | Filterable grid + lightbox                      |
| `/faq`                 | FAQs                     | Full accordion of questions                     |
| `/privacy-policy`      | Privacy Policy           | How contact details are handled                 |
| `/medical-disclaimer`  | Medical Disclaimer       | Educational scope of the site                   |
| `*`                    | NotFound                 | Custom 404 with helpful links                   |

---

## 4. Key functionality

- Responsive sticky navigation with an **accessible hamburger menu** (aria-expanded,
  aria-controls, Escape to close, body-scroll lock, closes on route change).
- **Scroll to top** on route change, plus smooth scrolling to in-page anchors.
- **Focus management**: the main region receives focus on navigation so screen readers
  announce the new page.
- **FAQ accordion** built on buttons with `aria-expanded` / `aria-controls` and labelled regions.
- **Appointment form validation** (required fields, phone digit rules, email format,
  future-dated appointment, consent checkbox, honeypot anti-spot field) with clear inline
  error messages, a loading state, and a success state.
- **Category filters** on the Blog and Gallery pages.
- **Gallery lightbox** with Escape-to-close and focusable controls.
- **Per-page titles and meta descriptions** via `usePageMeta`.
- **Custom 404 page**, `robots.txt`, `sitemap.xml`, favicon and Open Graph metadata.
- **`tel:` links** for +93 78 765 4751 throughout the site.
- **Framer Motion** animations that respect `prefers-reduced-motion` (also enforced globally
  in CSS).
- **Skip-to-content link** and visible keyboard focus rings.

---

## 5. Appointment form — demonstration mode

`src/components/AppointmentForm.jsx` contains:

```js
const DEMO_MODE = true;
const API_ENDPOINT = '/api/appointment-request';
```

While `DEMO_MODE` is `true` the form **validates input only** — nothing is transmitted or
stored, and the UI says so explicitly. The success message never claims an appointment is
booked.

**Before production:**

1. Point `API_ENDPOINT` at a secure server-side endpoint or an approved clinic booking service
   and set `DEMO_MODE = false`.
2. Validate all submitted data on the server, serve over HTTPS, add rate limiting and spam
   protection, and restrict access to appointment records.
3. Never expose API keys in frontend code.
4. Never store sensitive medical information in browser storage.

---

## 6. Content verification checklist (important)

All credentials, memberships, distinctions, clinic services and contact details are treated as
**supplied information** until verified. Before launching:

- [ ] Verify qualifications (MBBS, MD, RMP, MCPS, FCPS Neurosurgery) and their awarding bodies.
- [ ] Verify memberships of CPSP, AANS, WFNS and the Pakistan Society of Neurosurgeons.
- [ ] Verify the "first Afghan neurosurgeon to obtain FCPS in Neurosurgery" claim, or soften/remove it.
- [ ] Confirm hospital affiliation with Rifah Medical Complex and the exact clinic address
      (then add a verified Google Maps embed to `Contact.jsx`).
- [ ] Confirm the phone number **+93 78 765 4751**.
- [ ] Confirm the hero/About/Gallery photograph is authentic, shows Dr. Zadran, and is
      authorized for publication — and replace it with a higher-resolution original.
- [ ] Confirm which procedures are actually offered before presenting them as available.
- [ ] Have every medical article reviewed by a qualified professional; only attribute articles
      to Dr. Zadran with his explicit approval.
- [ ] Replace `https://example.com` in `index.html`, `robots.txt` and `sitemap.xml` with the
      real domain.

No patient numbers, success rates, awards, testimonials, reviews or years of experience have
been invented anywhere on this site.

---

## 7. Images

- **Doctor portrait**: `src/assets/images/doctor-photo.webp` (474 × 474) is the photograph
  supplied for the hero, the About page and the Gallery. It is imported as a local asset rather
  than hot-linked, so it keeps working offline.
  - Before launch: confirm the photograph is authentic, authorized for publication, and shows
    Dr. Zadran. A higher-resolution version (at least 1000 px) is recommended — this file is a
    web thumbnail and may look soft on high-density screens.
  - If the file ever fails to load, `<SafeImage>` falls back to
    `src/assets/images/doctor-portrait.svg`, so the layout never breaks.
- **Blog illustrations**: `src/assets/images/article-{brain,spine,scan,guide}.svg` — branded
  vector artwork used by the seven articles.
- **Gallery**: items marked `placeholder: true` are stock placeholders badged as such in the UI.
  Replace them with authentic, approved photographs. Never publish identifiable patient images,
  records or surgical images without documented consent.
- **Section/gallery remote photographs** (where used) are loaded through `<SafeImage>`, which
  falls back to `src/assets/images/placeholder.svg` on error or after a 6-second grace period.
- Descriptive `alt` text is provided throughout; keep images compressed for fast loading.

---

## 8. Tech stack

| Concern            | Library                          |
| ------------------ | -------------------------------- |
| UI                 | React 18                         |
| Build tool         | Vite 5                           |
| Styling            | Tailwind CSS 3                   |
| Routing            | React Router DOM 6               |
| Icons              | lucide-react                      |
| Animation          | Framer Motion                     |
| Form validation    | React Hook Form                   |
| Typography         | Inter + Manrope (Google Fonts)    |

## 9. Accessibility notes

- Semantic landmarks (`header`, `nav`, `main`, `section`, `article`, `footer`, `aside`).
- Descriptive headings and `aria-labelledby` on sections.
- Keyboard-operable menu, accordion, filters and lightbox.
- Colour contrast chosen for readable text on white and light blue-grey backgrounds.
- Reduced-motion support honoured in both Framer Motion and global CSS.
