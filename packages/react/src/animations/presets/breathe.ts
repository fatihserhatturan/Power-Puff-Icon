export const className = 'ppi-breathe'
export const durations = { slow: '6s', normal: '4s', fast: '2s' } as const
export const css = `
  @keyframes ppi-breathe {
    0%,100% { opacity: 1; }
    50%     { opacity: 0.4; }
  }
  .ppi-breathe { animation: ppi-breathe var(--ppi-dur, 4s) ease-in-out var(--ppi-delay, 0s) var(--ppi-count, infinite); }
`
