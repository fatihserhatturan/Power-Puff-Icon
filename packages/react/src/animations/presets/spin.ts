export const className = 'ppi-spin'
export const durations = { slow: '2s', normal: '1s', fast: '0.4s' } as const
export const css = `
  @keyframes ppi-spin {
    from { transform: var(--ppi-bt,) rotate(0deg); }
    to   { transform: var(--ppi-bt,) rotate(360deg); }
  }
  .ppi-spin { animation: ppi-spin var(--ppi-dur, 1s) linear var(--ppi-delay, 0s) var(--ppi-count, infinite); }
`
