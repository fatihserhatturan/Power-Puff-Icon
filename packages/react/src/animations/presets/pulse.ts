export const className = 'ppi-pulse'
export const durations = { slow: '2s', normal: '1s', fast: '0.4s' } as const
export const css = `
  @keyframes ppi-pulse {
    0%,100% { transform: var(--ppi-bt,) scale(1); }
    50%     { transform: var(--ppi-bt,) scale(1.15); }
  }
  .ppi-pulse { animation: ppi-pulse var(--ppi-dur, 1s) ease-in-out var(--ppi-delay, 0s) var(--ppi-count, infinite); }
`
