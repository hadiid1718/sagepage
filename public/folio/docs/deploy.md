# Deployment Guide · Folio Template

Because Folio is built with pure static HTML, CSS, and vanilla JavaScript, you can host it for free with global CDN delivery and automatic SSL certificates.

---

## Option 1: Netlify Drop (Easiest — 60 Seconds, No Terminal)
1. Open your web browser and go to: **[https://app.netlify.com/drop](https://app.netlify.com/drop)**
2. Drag your unzipped `folio/` folder directly into the browser upload box.
3. Your website goes live immediately with a free `https://*.netlify.app` address!
4. To connect your custom domain:
   - Click **Domain management** > **Add custom domain** (e.g. `yourname.com`).
   - Add the simple DNS CNAME records provided by Netlify in your domain registrar (GoDaddy, Namecheap, Google Domains).
   - Free automated SSL is issued within a few minutes.

---

## Option 2: Cloudflare Pages
1. Log in to [Cloudflare](https://pages.cloudflare.com/).
2. Select **Pages** > **Create a project** > **Direct Upload**.
3. Name your project and upload the `folio/` folder.
4. Enjoy unlimited bandwidth and ultra-fast Edge CDN response times worldwide.

---

## Option 3: Vercel
1. Install Vercel CLI (`npm i -g vercel`) or use the Vercel dashboard.
2. In the `folio/` directory, simply run:
   ```bash
   vercel
   ```
3. Set the build command to empty and output directory to `./`.

---

## Option 4: Traditional Shared Web Hosting (cPanel / Apache / Nginx / FTP)
1. Connect to your web hosting via FTP (e.g. FileZilla, Cyberduck) or your cPanel File Manager.
2. Upload the contents of `folio/` into your `public_html/` or document root folder.
3. Your site is live! No PHP, database, or server runtime configuration needed.
