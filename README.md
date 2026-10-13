# HyRecruitAI — Official Service Discontinuation Website

A standalone, responsive, high-performance static shutdown website for **HyRecruitAI**.

> **IMPORTANT NOTICE**: This repository contains the official decommission notice for **HyRecruitAI only**. Do **not** deploy or modify DNS records without explicit authorization and approval.

---

## 📌 Key Disclosures & Specifications

| Field | Detail |
| :--- | :--- |
| **Entity Covered** | **HyRecruitAI** only |
| **Operational Status** | **Permanently Discontinued** |
| **Registered User Accounts** | **Zero (0)** registered users during the entire platform lifecycle |
| **Public Notice Period** | Active and publicly accessible online until **21 October 2026** |
| **Support Email** | [`madhu@hyrecruitai.com`](mailto:madhu@hyrecruitai.com) |
| **Privacy Enquiry Desk** | [`madhu@hyrecruitai.com`](mailto:madhu@hyrecruitai.com) |
| **Architecture** | 100% Static (Zero backend, zero database, zero cookies, zero analytics, zero third-party API dependencies) |

---

## 🛡️ Privacy & Data Handling Compliance

1. **Zero Registered Users**: Because there were no registered users on the HyRecruitAI platform, no user account credentials, applicant resumes, candidate profiles, or customer databases are maintained.
2. **Backups & System Logs Disclosure**: In strict accordance with truthful and transparent privacy reporting standards, **no claim is made that all residual system logs or automated infrastructure backups have been deleted unless verified**. Any residual server snapshots or operational telemetry expire according to automated cloud retention lifecycles and are not processed for operational or recruitment activities.
3. **Statutory Privacy Rights**: Data subjects inquiring about statutory rights under GDPR, CCPA, or regional data protection legislation can reach the dedicated privacy desk at [`madhu@hyrecruitai.com`](mailto:madhu@hyrecruitai.com).

---

## 🚀 Technology Stack

- **Framework**: React 19 + Vite
- **Styling**: Vanilla CSS modern design system (`src/index.css`) featuring glassmorphism, responsive fluid typography (`clamp()`), accessible color contrast, and brand color palette (cyan `#0099e5`, green `#12b839`, dark slate `#080d18`).
- **Icons**: Self-contained inline SVGs (zero external icon fonts or CDN scripts).
- **Privacy & Security**: Zero tracking cookies, zero analytics scripts, zero external fonts. Completely self-contained.

---

## 💻 Local Development & Build

### Prerequisites
- Node.js (v18+)
- npm (v9+)

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```

### 3. Generate Production Build
```bash
npm run build
```
The optimized, static production bundle is generated in the `dist/` directory.

### 4. Preview the Production Build Locally
```bash
npm run preview -- --port 4173
```

---

## 🌐 Free Static Hosting Deployment Options

> ⚠️ **Hold Notice**: As requested, **do not deploy or change DNS records without prior approval**. 
> When approval is granted, the contents of the `dist/` directory can be deployed to any of the following free static hosts:

### Option A: Cloudflare Pages (Recommended)
1. Link your repository or upload the `dist/` directory directly using the Cloudflare Dashboard:
   - **Framework preset**: None / Vite
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
2. Custom domain can be attached following formal DNS approval.

### Option B: GitHub Pages
1. Push this repository to GitHub.
2. Under **Settings > Pages**, select **GitHub Actions** or deploy from the `gh-pages` branch using the `dist/` folder.
3. The project includes relative base path resolution (`base: './'`) in `vite.config.js` and a fallback `404.html` in `public/` for automatic subpath compatibility.

### Option C: Netlify
1. Drag and drop the `dist/` folder into Netlify Drop, or connect Git:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`

### Option D: Vercel
1. Run `npx vercel` or link Git:
   - **Framework**: Vite
   - **Output Directory**: `dist`

---

## 📁 Directory Structure

```text
shutdown-website/
├── dist/                     # Optimized static production build (deployable)
│   ├── assets/               # Bundled CSS, JS, and branded image assets
│   ├── favicon.svg           # Branded HyRecruitAI tab icon
│   ├── logo.png              # HyRecruitAI official logo asset
│   ├── index.html            # Production HTML entry point
│   └── 404.html              # Static host routing fallback
├── public/                   # Public static assets
│   ├── 404.html              # Static host routing fallback
│   ├── favicon.svg           # Custom vector favicon
│   └── logo.png              # Official HyRecruitAI logo
├── src/
│   ├── assets/
│   │   └── logo.png          # Bundled logo component asset
│   ├── App.jsx               # Main React application & decommissioning notice
│   ├── index.css             # Complete modern CSS design system
│   └── main.jsx              # React DOM mounting
├── index.html                # Vite HTML template with SEO/OpenGraph metadata
├── package.json              # Project scripts and dependencies
├── vite.config.js            # Vite configuration with relative base path
└── README.md                 # Project documentation and deployment guide
```

---

## 📅 Notice Expiration
This notice and all associated inquiry channels will remain active and publicly accessible until **21 October 2026**.
