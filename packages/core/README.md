# @power-puff/core

Shared types and utilities for the Power Puff Icon library.

> **This package is not intended for direct installation.**
> It is an internal dependency used by framework adapter packages such as `@power-puff/react`.

## Exports

### Types

| Export         | Description                                       |
|----------------|---------------------------------------------------|
| `IconSize`     | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl' \| number` |
| `IconBaseProps`| Base props shared across all framework adapters   |
| `IconMeta`     | Metadata embedded in every generated icon module  |

### Utilities

| Export         | Description                                |
|----------------|--------------------------------------------|
| `SIZE_MAP`     | Maps named sizes to pixel values           |
| `resolveSize`  | Resolves an `IconSize` to a pixel `number` |

## License

MIT © Power Puff Icon Contributors
