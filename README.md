# AHD-Proto

```
 █████  ██   ██ ██████  
██   ██ ██   ██ ██   ██ 
███████ ███████ ██   ██ 
██   ██ ██   ██ ██   ██ 
██   ██ ██   ██ ██████  

Clean, minimalist, and interactive digital portfolio concept
brainstormed for Kalbe Animal Health (PT Agroveta Husada Dharma).
```

[![Nuxt 4](https://img.shields.io/badge/Nuxt-4.4.2-00DC82?style=flat-square&logo=nuxt.js&logoColor=white)](https://nuxt.com/)
[![Vue 3](https://img.shields.io/badge/Vue.js-3.5.32-4FC08D?style=flat-square&logo=vue.js&logoColor=white)](https://vuejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Bun](https://img.shields.io/badge/Bun-1.3.12-FBF0DF?style=flat-square&logo=bun&logoColor=black)](https://bun.sh/)

### Overview

**AHD Proto** is an architectural prototype brainstorming a modern corporate portfolio for **Kalbe Animal Health** ([PT Agroveta Husada Dharma](https://agroveta.co.id)), exploring modern design and frontend engineering that can elevate multi-sector veterinary product discovery.

### Preface

This prototype was conceived as an architectural exploration to upgrade from an aging corporate portfolio that was slow, bloated, and difficult to manage. The core objective is to deliver a clean, minimalist portfolio that looks strictly professional rather than overly trend-driven ("not vibed"), while maximizing SEO performance across veterinary search indexes through deterministic bilingual routing, structured metadata, and lightning-fast SSR.

For the live corporate website and operations, visit the actual project: [Agroveta Husada Dharma](https://agroveta.co.id).

---

```
ahd-proto/
├── public/
├── src/
│   ├── app/
│   │   └── router.options.ts         # Scroll behavior & route transition handling
│   ├── assets/
│   ├── components/
│   ├── composables/
│   ├── constants/
│   │   └── routes.ts                 # Dual-language route contracts
│   ├── data/
│   │   ├── policyContact.ts
│   │   ├── productCategories.ts
│   │   ├── products.ts               # Product catalog dataset
│   │   └── seo.ts                    # Per-route title & description localized dictionaries
│   ├── layouts/
│   │   └── default.vue               # Global layout wrapper (Navbar + Main Slot + Footer)
│   ├── locales/                      # UI localization dictionaries (ID & EN)
│   ├── middleware/
│   │   └── lang-redirect.global.ts  
│   ├── pages/                        # File-based routed views
│   │   ├── contact/
│   │   ├── product/
│   │   │   ├── [category]/
│   │   │   └── [[category]].vue
│   │   ├── index.vue
│   │   ├── privacy-policy.vue
│   │   └── terms-and-conditions.vue
│   ├── types/                        # Domain model contracts & schemas
│   ├── app.vue
│   └── error.vue
├── .gitignore
├── bun.lock
├── netlify.toml
├── nuxt.config.ts
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

---

### Technology Stack

| Category | Technology | Details |
|---|---|---|
| **Frontend Framework** | [Nuxt 4](https://nuxt.com/) | Universal Vue 3 SSR/SSG framework with file-based routing |
| **Component Engine** | [Vue 3](https://vuejs.org/) | Composition API with `<script setup>` and TypeScript |
| **Runtime & Package Manager** | [Bun](https://bun.sh/) | Fast all-in-one JavaScript runtime & package manager (v1.3+) |
| **Styling & Design System** | [Tailwind CSS](https://tailwindcss.com/) | Utility-first CSS framework with JIT compilation via `@nuxtjs/tailwindcss` |
| **Asset & Image Optimization** | [@nuxt/image](https://image.nuxt.com/) | Automated WebP conversion, responsive sizing, and CDN delivery |
| **Iconography** | [Lucide Vue Next](https://lucide.dev/) | Tree-shakeable, clean SVG icons |
| **Motion & Animation** | [GSAP](https://gsap.com/) | Scroll-triggered transitions and interactive micro-animations |
| **Language & Type Checking** | [TypeScript](https://www.typescriptlang.org/) | Strict static typing across components, composables, and data models |
| **Deployment & Hosting** | [Netlify](https://www.netlify.com/) | Cloud edge hosting with automated CI/CD and CDN edge routing |

---

### Quick Start

Launch the AHD development server or build the application using Bun.

#### Prerequisites
- [Bun](https://bun.sh/) (v1.0+, recommended v1.3+)

#### Installation & Development

```bash
# 1. Clone the repository
git clone https://github.com/Deuterrr/ahd-proto.git
cd ahd-proto

# 2. Install dependencies via Bun
bun install

# 3. Start the local development server (binds to http://localhost:3000)
bun run dev
```

#### Production Build & Preview

```bash
# 1. Compile the production build
bun run build

# 2. Preview the production build locally
bun run preview
```

#### Checking Health
Verify the local development server is running and responding:

```bash
curl -i http://localhost:3000/
```

Expected behavior: HTTP `302 Found` redirecting to `/id/` or `/en/` depending on the client locale.

---

### Quick Actions

Development, build, preview, and typecheck commands available via Bun:

| Command | Traditional Equivalent | Description |
| :--- | :--- | :--- |
| `bun run dev` | `npx nuxt dev` | Starts the local development server with Hot Module Replacement (HMR) |
| `bun run build` | `npx nuxt build` | Compiles application for production into the `.output/` bundle |
| `bun run generate` | `npx nuxt generate` | Pre-renders static routes into `dist/` for static hosting and CDN distribution |
| `bun run preview` | `npx nuxt preview` | Starts a local HTTP server to preview compiled production artifacts |
| `bun run postinstall` | `npx nuxt prepare` | Generates Nuxt virtual types and `.nuxt/` build manifests |
| `bun x nuxi typecheck` | `npx nuxi typecheck` | Validates TypeScript types across components, composables, and pages |
| `bun install` | `npm install` | Deterministically installs dependencies using `bun.lock` |

---

### License

This project is licensed under the [MIT License](LICENSE).
