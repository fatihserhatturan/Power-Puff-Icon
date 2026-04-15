export const className = 'ppi-swing'
export const durations = { slow: '1.8s', normal: '1s', fast: '0.5s' } as const
export const css = `
  @keyframes ppi-swing {
    0%   { transform: var(--ppi-bt,) rotate(0deg); }
    20%  { transform: var(--ppi-bt,) rotate(15deg); }
    40%  { transform: var(--ppi-bt,) rotate(-10deg); }
    60%  { transform: var(--ppi-bt,) rotate(5deg); }
    80%  { transform: var(--ppi-bt,) rotate(-5deg); }
    100% { transform: var(--ppi-bt,) rotate(0deg); }
  }
  .ppi-swing { animation: ppi-swing var(--ppi-dur, 1s) ease-in-out var(--ppi-delay, 0s) var(--ppi-count, infinite); transform-origin: top center; }
`
