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

`main.tsx` provides the light Fluent theme. `components/AppShell.tsx` owns the
sidebar and accepts page content as children. Navigation uses URL fragments,
including browser back/forward, without a router dependency. The content area is
intentionally empty; there are no storage features, backend, or authentication yet.
