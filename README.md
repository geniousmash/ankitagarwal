# CA Ankit Agrawal - Official Website

A high-converting, modern personal brand and portfolio website for **CA Ankit Agrawal** (Fellow Chartered Accountant), modeled after the design, typography, and structure of [mdumarkhan.com](https://www.mdumarkhan.com/).

---

## ✨ Features & Architecture

- **Faithful Design Replication**:
  - **Kadence-inspired sticky header** with brand monogram logo, responsive navigation, and consultation CTA.
  - **Split hero section**: Introductory eyebrow badge (`👋 Hey! I'm CA Ankit`), bold typography, CTA actions, trust badges, and circular gradient portrait graphic.
  - **Trust / Client Bar**: "Companies & Startups We've Advised" logo strip.
  - **"My Work" Services Grid**: 6 core pillars (Income Tax, GST, Startup Incorporation, Statutory Audits, Virtual CFO, Bookkeeping & Payroll) with hover elevation effects.
  - **"About Me" Highlight**: Credential badges (FCA, DISA), years of practice metrics, and core values.
  - **"What People Say" Testimonials**: Social proof cards with star ratings, client photos, designations, and companies.
  - **"Latest Insightful Resources" (Blog)**: 3-column articles with tags, publication dates, and read-more actions.
  - **High-Converting Lead Magnet**: "Get Your Free 30-Min Tax & Compliance Health Check 👇" with interactive booking modal and WhatsApp quick-connect.
  - **Footer**: Bio, quick links, practice areas, newsletter subscription box, and legal copyright bar.
- **Dedicated Sub-pages**:
  - [`about.html`](./about.html): In-depth biography, credentials, and practice pillars.
  - [`services.html`](./services.html): In-depth service deliverables and scopes.
  - [`blog.html`](./blog.html): Knowledge hub and tax resource guides.
  - [`contact.html`](./contact.html): Office address, direct phone/WhatsApp, email, and inquiry form.
- **Interactivity**:
  - Smooth consultation booking modal with autofocus and form validation.
  - Direct WhatsApp click-to-chat integration with pre-filled message generator.
  - Mobile hamburger navigation drawer.
  - Toast notifications on action completion.
  - Zero heavy external dependencies (lightning-fast load times).

---

## 🚀 How to Run on Localhost

You can run this project locally using any of the following methods:

### Option 1: Python (Built-in, zero installation required)
```bash
python3 -m http.server 8080
```
Open your browser and navigate to: **`http://localhost:8080`**

### Option 2: Node.js / npm
```bash
npm start
# OR
npm run dev
```
*(Runs on `http://localhost:8080`)*

---

## 🌐 How to Host on GitHub Pages (Step-by-Step)

This repository is pre-configured with `.nojekyll` and an automated GitHub Actions deployment workflow (`.github/workflows/deploy.yml`).

### Step 1: Initialize Git and Push to GitHub
If you haven't created a GitHub repository yet:
1. Go to [GitHub](https://github.com/new) and create a new repository (e.g., `ca-ankit-agrawal` or `<your-username>.github.io`).
2. Run the following commands in this directory:

```bash
git init
git add .
git commit -m "Initial commit: CA Ankit Agrawal website modeled after mdumarkhan.com"
git branch -M main
git remote add origin https://github.com/<your-github-username>/<repo-name>.git
git push -u origin main
```

### Step 2: Enable GitHub Pages in Repository Settings
1. Go to your repository on GitHub.
2. Click on **Settings** → **Pages** (in the left sidebar).
3. Under **Build and deployment**:
   - **Source**: Select **GitHub Actions** (recommended, as the included workflow will automatically deploy on every push).
   - *Alternatively*: Select **Deploy from a branch** → choose branch `main` / folder `/ (root)` and click **Save**.
4. Within 1–2 minutes, your website will be live at:
   ```
   https://<your-github-username>.github.io/<repo-name>/
   ```
   *(Or at your custom domain like `https://www.caankitagrawal.com` if configured in Settings → Pages).*

---

## 🛠️ How to Customize

- **Change Contact Details / WhatsApp Number**:
  Search for `+91 98765 43210` or `919876543210` and replace with Ankit Agrawal's actual phone number across `index.html`, `contact.html`, and `js/main.js`.
- **Change Office Address / Email**:
  Update `contact@caankitagrawal.com` and the address in `contact.html` and the footer of `index.html`.
- **Replace Photos / Logos**:
  Drop your custom profile image into `assets/images/ca-hero.svg` (or `.png`/`.jpg` and update the `src` tag in `index.html`).
