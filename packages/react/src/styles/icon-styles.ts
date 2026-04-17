import * as circle from './presets/circle'
import * as rounded from './presets/rounded'
import * as glass from './presets/glass'
import * as neon from './presets/neon'
import * as gradient from './presets/gradient'
import * as liquid from './presets/liquid'
import * as shadow from './presets/shadow'
import * as outlineRing from './presets/outline-ring'
import * as badge from './presets/badge'

type StylePreset = { className: string; css: string }

const STYLE_PRESETS: Record<string, StylePreset> = {
  circle,
  rounded,
  glass,
  neon,
  gradient,
  liquid,
  shadow,
  'outline-ring': outlineRing,
  badge,
}

const STYLE_ID = 'ppi-icon-styles'

const WRAP_CSS = `
.ppi-style-wrap {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
`

const COMBINED_CSS =
  WRAP_CSS +
  Object.values(STYLE_PRESETS)
    .map((p) => p.css)
    .join('\n')

export function ensureIconStyles(): void {
  if (typeof document === 'undefined') return
  if (document.getElementById(STYLE_ID)) return
  const el = document.createElement('style')
  el.id = STYLE_ID
  el.textContent = COMBINED_CSS
  document.head.appendChild(el)
}
