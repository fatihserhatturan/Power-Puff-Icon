export const className = 'ppi-float'
export const durations = { slow: '4s', normal: '3s', fast: '1.5s' } as const
export const css = `
  @keyframes ppi-float {
    /*
     * Gentle levitation with a subtle perspective cue:
     *
     * The cubic-bezier(0.45, 0.05, 0.55, 0.95) is a flattened S-curve —
     * it spends more time near the top and bottom extremes (decelerates
     * earlier, accelerates later) compared to standard ease-in-out.
     * This gives it a natural "hovering pause" feel at the peak.
     *
     * A slight scaleX(1.02) / scaleY(0.98) at rest simulates subtle
     * ground contact shadow compression, while scaleX(0.98) / scaleY(1.02)
     * at peak hints at the icon lightening as it rises — a classic
     * Disney "squash and stretch" on a very restrained scale so it
     * doesn't distort complex icons.
     *
     * Lift increased to -6px (from -4px) for clearer visual separation.
     */
    0%,100% {
      transform: var(--ppi-bt,) translateY(0) scaleX(1.02) scaleY(0.98);
      animation-timing-function: cubic-bezier(0.45, 0.05, 0.55, 0.95);
    }
    50% {
      transform: var(--ppi-bt,) translateY(-6px) scaleX(0.98) scaleY(1.02);
      animation-timing-function: cubic-bezier(0.45, 0.05, 0.55, 0.95);
    }
  }
  .ppi-float {
    animation: ppi-float var(--ppi-dur, 3s) linear var(--ppi-delay, 0s) var(--ppi-count, infinite);
  }
`
