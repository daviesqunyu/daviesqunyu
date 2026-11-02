# Portfolio repository

This Next.js App Router project is the live portfolio source for `https://davis.dvtechnologies.xyz/`.

## Local development

```bash
npm install
npm run dev
```

Run `npm run build` before publishing. The project is deployed on Vercel; pushing to `main` triggers the configured deployment. Images used in portfolio cards are kept under `public/projects/` and referenced by absolute `/projects/...` paths to avoid third-party image outages.
