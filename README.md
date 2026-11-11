# Acuatec Waterproofing Services - Website

Multi-page static website for **Acuatec Waterproofing Services**, a PCAB-licensed waterproofing and flooring contractor in Mandaluyong City. Plain HTML, CSS and JavaScript with no build step and no dependencies.

## Pages
| File | Purpose |
|---|---|
| `index.html` | Home: hero carousel, services, about, process, project carousel, finder, clients, FAQ |
| `waterproofing.html` | Integral, torch-applied, cold-applied and spray-applied waterproofing |
| `flooring.html` | Epoxy, polyurethane, rubberized coatings and concrete polishing |
| `repairs.html` | Crack injection, rectification and painting works |
| `contact.html` | Three-step automated quotation form and contact details |
| `404.html`, `sitemap.xml`, `robots.txt` | Error page and search-engine files |

```
assets/css/styles.css   styles (brand palette in :root)
assets/js/main.js       carousels, lightbox, finder, quote form (see CONFIG at the top)
assets/img/             optimized WebP photos, logos, favicon, social image
```

## 1. Set your site address (required for SEO)
Canonical links, social cards and the sitemap use the placeholder `https://USERNAME.github.io/acuatec-website/`. Replace it with your real address (GitHub Pages URL or custom domain, keep the trailing slash):
```
grep -rl "USERNAME.github.io/acuatec-website/" . | xargs sed -i 's#https://USERNAME.github.io/acuatec-website/#https://YOUR-DOMAIN/#g'
```
Then submit `sitemap.xml` in Google Search Console and Bing Webmaster Tools.

## 2. Activate the quotation form
The form posts to **FormSubmit** (`CONFIG.formEndpoint` in `assets/js/main.js`), which emails each request to `acuatecph@gmail.com` and sends the customer a confirmation if they gave an email.
1. Publish the site, open `contact.html` and submit one test request.
2. FormSubmit emails a one-time activation link to `acuatecph@gmail.com`. Click it.
3. Later submissions arrive automatically. If sending ever fails, the visitor sees their details with email and Messenger buttons, so no request is lost.

To use another service (Formspree, Web3Forms or your own endpoint), change `formEndpoint` and adjust the payload in the submit handler.

## 3. Deploy on GitHub Pages
Push these files to the `main` branch, then go to **Settings > Pages**, choose **Deploy from a branch**, select `main` and `/ (root)`. All paths are relative.

## Editing
- Colors: Primary Blue `#1F3C88`, Secondary Blue `#3A6EA5`, Light Gray `#F5F5F5`, Dark Gray `#333333`, White. Fonts: Montserrat and Lato.
- Add a photo to a carousel: place a WebP (about 1000 px wide) in `assets/img/` and add a `<figure class="slide">` with an `<img>` that has `width`, `height` and descriptive `alt` text.
- Contact details and business data appear in each page's footer and in the `GeneralContractor` JSON-LD in every page `<head>`.

Content and photos come from Acuatec's company profile and brand kit. All rights reserved by Acuatec Waterproofing Services.
