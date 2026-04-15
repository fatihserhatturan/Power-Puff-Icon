export const className = 'ppi-roll'
export const durations = { slow: '1.4s', normal: '0.8s', fast: '0.4s' } as const
export const css = `
  @keyframes ppi-roll {
    0%   { transform: var(--ppi-bt,) translateX(-100%) rotateZ(-360deg); opacity: 0; }
    100% { transform: var(--ppi-bt,) translateX(0) rotateZ(0deg); opacity: 1; }
  }
  .ppi-roll { animation: ppi-roll var(--ppi-dur, 0.8s) ease-out var(--ppi-delay, 0s) var(--ppi-count, 1) both; }
`
