# Azure Storage Portal

Modern portal for Azure Storage.

## Development

Use Node.js 22.12+ (or 20.19+).

```sh
npm install
npm run dev
```

```sh
npm run lint
npm run build
npm run preview
```

React, TypeScript, Vite, and Fluent UI v9. The application lives in `src`.

The root URL shows a simple Azure Storage landing page with documentation links
and a Sign In link to the Azure portal. Get Started opens the existing shell
at `#dashboard`. The landing page uses Fluent UI components and the standard
Fluent dark theme.

`App.tsx` selects the dark landing theme or the light Fluent theme for the portal.
`components/AppShell.tsx` owns the sidebar and accepts page content as children.
Navigation uses URL fragments, including browser back/forward, without a router
dependency. The portal content area is intentionally empty; there are no storage
features, backend, or in-app authentication yet.
