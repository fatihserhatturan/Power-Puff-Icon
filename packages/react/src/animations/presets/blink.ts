export const className = 'ppi-blink'
export const durations = { slow: '2s', normal: '1s', fast: '0.5s' } as const
export const css = `
  @keyframes ppi-blink {
    0%,100% { opacity: 1; }
    50%     { opacity: 0; }
  }
  .ppi-blink { animation: ppi-blink var(--ppi-dur, 1s) step-start var(--ppi-delay, 0s) var(--ppi-count, infinite); }
`
