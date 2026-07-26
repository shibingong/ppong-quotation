# PPong Quotation

An Angular application for preparing and printing quotation comparisons for PP Ong or Pembekalan C.S., Dinamik, and Riwani.

## Requirements

- Node.js 20
- npm

## Development

Install the locked dependencies and start the development server:

```bash
npm ci
npm start
```

Open `http://localhost:4200/`. The app reloads when source files change.

## Quality checks

Run the same checks used by CI:

```bash
npm run test:ci
npm run build
```

## Build

`npm run build` writes the production bundle to `dist/ppong-quotation/`. The committed `docs/` directory contains the GitHub Pages build and is updated separately when the application is released.
