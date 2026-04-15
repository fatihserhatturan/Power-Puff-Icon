import * as draw  from './presets/draw'
import * as erase from './presets/erase'
import * as trace from './presets/trace'

// ---------------------------------------------------------------------------
// Speed → duration lookup for draw-family animations
// ---------------------------------------------------------------------------

export const DRAW_SPEED_DURATION: Record<string, Record<string, string>> = {
  draw:  draw.durations,
  erase: erase.durations,
  trace: trace.durations,
}

// ---------------------------------------------------------------------------
// Runtime CSS injection (SSR-safe)
// ---------------------------------------------------------------------------

const DRAW_STYLE_ID = 'ppi-draw-styles'

const COMBINED_CSS =
  draw.css + erase.css + trace.css +
  `
  @media (prefers-reduced-motion: reduce) {
    .ppi-draw path, .ppi-draw circle, .ppi-draw line,
    .ppi-draw polyline, .ppi-draw rect, .ppi-draw ellipse,
    .ppi-erase path, .ppi-erase circle, .ppi-erase line,
    .ppi-erase polyline, .ppi-erase rect, .ppi-erase ellipse,
    .ppi-trace path, .ppi-trace circle, .ppi-trace line,
    .ppi-trace polyline, .ppi-trace rect, .ppi-trace ellipse {
      animation: none;
      stroke-dasharray: unset;
      stroke-dashoffset: unset;
    }
  }
`

export function ensureDrawStyles(): void {
  if (typeof document === 'undefined') return
  if (document.getElementById(DRAW_STYLE_ID)) return
  const el = document.createElement('style')
  el.id = DRAW_STYLE_ID
  el.textContent = COMBINED_CSS
  document.head.appendChild(el)
}
