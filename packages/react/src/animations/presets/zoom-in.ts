export const className = 'ppi-zoom-in'
export const durations = { slow: '0.8s', normal: '0.5s', fast: '0.25s' } as const
export const css = `
  @keyframes ppi-zoom-in {
    0%   { transform: var(--ppi-bt,) scale(0.3); opacity: 0; }
    100% { transform: var(--ppi-bt,) scale(1); opacity: 1; }
  }
  .ppi-zoom-in { animation: ppi-zoom-in var(--ppi-dur, 0.5s) ease-out var(--ppi-delay, 0s) var(--ppi-count, 1) both; }
`
