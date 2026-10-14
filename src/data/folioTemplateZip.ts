import JSZip from 'jszip';

export async function generateFolioTemplateZip(): Promise<Blob> {
  const zip = new JSZip();
  const root = zip.folder('folio') || zip;

  // Read files from /folio and package into zip
  // We can fetch or provide the actual files
  const fileList = [
    'README.md',
    'LICENSE.txt',
    'CHANGELOG.md',
    'package.json',
    'tailwind.config.js',
    'sitemap.xml',
    'robots.txt',
    'site.webmanifest',
    'index.html',
    'portfolio.html',
    'project.html',
    'about.html',
    'services.html',
    'contact.html',
    'thank-you.html',
    '404.html'
  ];

  for (const filename of fileList) {
    try {
      const res = await fetch(`/folio/${filename}`);
      if (res.ok) {
        const text = await res.text();
        root.file(filename, text);
      }
    } catch {
      // Fallback
    }
  }

  // CSS and JS
  const subFiles = [
    { path: 'assets/css/style.css' },
    { path: 'assets/css/theme.css' },
    { path: 'assets/js/main.js' },
    { path: 'assets/js/config.js' },
    { path: 'src/input.css' },
    { path: 'docs/customization.md' },
    { path: 'docs/deploy.md' },
    { path: 'docs/seo-checklist.md' },
    { path: 'docs/forms.md' }
  ];

  for (const item of subFiles) {
    try {
      const res = await fetch(`/folio/${item.path}`);
      if (res.ok) {
        const text = await res.text();
        root.file(item.path, text);
      }
    } catch {}
  }

  return await zip.generateAsync({ type: 'blob' });
}

export async function triggerFolioZipDownload() {
  const blob = await generateFolioTemplateZip();
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'folio-template.zip';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
