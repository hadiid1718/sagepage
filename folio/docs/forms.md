# Forms Integration Guide · Folio Template

The contact form on `contact.html` is pre-configured with client-side validation, an anti-spam honeypot field, and budget/timeline selectors.

Choose your preferred delivery backend below:

---

## Method A: Formspree (Easiest — Free up to 50 submissions/month)
1. Register for a free account at [https://formspree.io](https://formspree.io).
2. Create a new form (e.g. "Folio Studio Inquiries") and copy your unique form ID (e.g. `f/xpznvqbe`).
3. Open `assets/js/config.js` and set:
   ```javascript
   formUrl: "https://formspree.io/f/your-form-id"
   ```
4. Test the form by submitting a message on `contact.html`. Formspree will forward submissions directly to your email inbox!

---

## Method B: Netlify Forms (Free & Built-in on Netlify)
If you deploy to Netlify, no third-party account is needed!
1. Open `contact.html`.
2. On the `<form id="contact-form">` tag, add the `netlify` attribute:
   ```html
   <form id="contact-form" name="studio-inquiries" method="POST" data-netlify="true" action="thank-you.html">
   ```
3. Netlify will automatically detect submissions in your site dashboard and email them to you.

---

## Method C: Basin, Formkeep, or MailerLite
- **Use Basin**: Set `formUrl: "https://usebasin.com/f/YOUR_ID"` in `assets/js/config.js`.
- **Use MailerLite / ConvertKit**: If you want inquiries added to a newsletter subscriber group, generate an embedded form action URL in your email marketing dashboard and paste it into `config.js`.

---

## Honeypot Anti-Spam Protection
The form includes an invisible field:
```html
<input type="text" id="company_website_hp" name="company_website_hp" tabindex="-1">
```
Human visitors will never see this field. Automated spam bots that crawl web forms will fill it out, triggering `assets/js/main.js` to silently reject the bot submission without bothering you with spam.
