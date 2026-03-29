# Power Puff Icon

A monorepo icon library — stroke-based SVG icons with React support, full TypeScript types, and tree-shaking built in.

## Packages

| Package | Description | Version |
|---------|-------------|---------|
| [`@power-puff/react`](./packages/react) | React icon components | ![npm](https://img.shields.io/npm/v/@power-puff/react) |
| [`@power-puff/core`](./packages/core) | Shared types and utilities (internal) | ![npm](https://img.shields.io/npm/v/@power-puff/core) |

## Getting Started (Users)

Install the React package:

```bash
npm install @power-puff/react
```

Use it in your project:

```tsx
import { SearchIcon, HeartIcon } from '@power-puff/react'

<SearchIcon size="lg" />
<HeartIcon color="red" label="Favorite" />
```

See the full API in [`packages/react/README.md`](./packages/react/README.md).

---

## Development

### Prerequisites

- Node.js ≥ 18
- npm ≥ 9

### Setup

```bash
git clone <repo>
cd power-puff-icon
npm install
```

### Commands

| Command | Description |
|---------|-------------|
| `npm run build` | Build all packages |
| `npm test` | Run all tests |
| `npm run test:watch` | Run tests in watch mode |
| `npm run test:coverage` | Run tests with coverage report |
| `npm run generate` | Generate React components from SVG files |
| `npm run demo` | Start the icon browser demo app |
| `npm run demo:build` | Build the demo app |

### Adding Icons

1. Create a `24×24` stroke-based SVG file in `svgs/<category>/icon-name.svg`
2. Optionally create `svgs/<category>/icon-name.meta.json` with tags:
   ```json
   { "tags": ["direction", "navigate"] }
   ```
3. Run `npm run generate`
4. The icon is now available as `<IconNameIcon />` from `@power-puff/react`

**Icon rules:**
- File names must be `kebab-case` (e.g. `arrow-up.svg`)
- viewBox must be `0 0 24 24`
- Icons must be stroke-based (`fill="none"`, `stroke="currentColor"`)
- Avoid abbreviations (`chevron`, not `chev`)

### Project Structure

```
power-puff-icon/
├── apps/
│   └── demo/              Vite + React icon browser
├── packages/
│   ├── core/              @power-puff/core — shared types
│   └── react/             @power-puff/react — React components
├── scripts/
│   └── generate-icons.ts  SVG → TSX generator
└── svgs/
    ├── arrows/
    ├── communication/
    ├── files/
    ├── media/
    ├── navigation/
    ├── social/
    ├── status/
    └── ui/
```

## Publishing a Release

This project uses [Changesets](https://github.com/changesets/changesets) for version management.

**1. Create a changeset after your changes:**

```bash
npm run changeset
```

Follow the interactive prompts to describe what changed and whether it's a patch / minor / major bump.

**2. Apply versions (on the release branch / CI):**

```bash
npm run version
```

This bumps `package.json` versions and generates `CHANGELOG.md` files.

**3. Publish to npm:**

```bash
npm run release
```

This builds all packages and publishes them to the npm registry.

## License

MIT © Power Puff Icon Contributors
