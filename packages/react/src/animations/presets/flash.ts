export const className = 'ppi-flash'
export const durations = { slow: '1.4s', normal: '0.8s', fast: '0.4s' } as const
export const css = `
  @keyframes ppi-flash {
    0%,100% { opacity: 1; }
    25%,75% { opacity: 0; }
    50%     { opacity: 1; }
  }
  .ppi-flash { animation: ppi-flash var(--ppi-dur, 0.8s) ease-in-out var(--ppi-delay, 0s) var(--ppi-count, infinite); }
`
