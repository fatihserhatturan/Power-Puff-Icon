export const className = 'ppi-blink'
export const durations = { slow: '2s', normal: '1.2s', fast: '0.55s' } as const
export const css = `
  @keyframes ppi-blink {
    /*
     * Smooth flash rather than a binary step — the icon stays fully visible
     * for most of the cycle (0%→40% and 60%→100%) and dips to near-invisible
     * (0.05) at the midpoint instead of disappearing entirely.
     *
     * The quick fade out (ease-in) and quick fade in (ease-out) keep the
     * flash crisp without the mechanical hard-cut of step-start. The 0.05
     * floor prevents a fully invisible state, which reads as a glitch on
     * dark backgrounds.
     */
    0%,100% { opacity: 1; }
    40%     { opacity: 1;    animation-timing-function: ease-in; }
    50%     { opacity: 0.05; animation-timing-function: ease-out; }
    60%     { opacity: 1; }
  }
  .ppi-blink {
    animation: ppi-blink var(--ppi-dur, 1.2s) linear var(--ppi-delay, 0s) var(--ppi-count, infinite);
  }
`
