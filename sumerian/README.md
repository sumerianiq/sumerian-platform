# Sumerian

A premium static Astro platform for cybersecurity, artificial intelligence, governance, research, and learning.

## Stack

- Astro
- TailwindCSS
- TypeScript strict mode
- Markdown content collections
- Static-only architecture

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## GitHub Pages deployment

1. Push this project to GitHub.
2. Enable GitHub Pages from repository settings.
3. Use GitHub Actions or deploy the `dist/` output.
4. Update `site` in `astro.config.mjs` to your final URL.

## Security checklist

- No secrets or API keys in source code.
- No `eval()` or Function constructor.
- Avoid unsafe `innerHTML` and unsafe DOM injection.
- External links use `rel="noopener noreferrer"`.
- Markdown content is rendered through Astro content collections.
- Use `_headers` with CSP, Referrer-Policy, Permissions-Policy, and X-Content-Type-Options where supported.
- Keep dependencies updated and run `npm audit`.

## QA checklist

- Test desktop, tablet, and mobile layouts.
- Run Lighthouse and target 90+ in Performance, Accessibility, SEO, and Best Practices.
- Check keyboard navigation and semantic HTML.
- Validate no broken links.
- Run `npm run build` before deployment.
