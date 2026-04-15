export const className = 'ppi-rubber-band'
export const durations = { slow: '1.6s', normal: '0.9s', fast: '0.45s' } as const
export const css = `
  @keyframes ppi-rubber-band {
    0%   { transform: var(--ppi-bt,) scaleX(1) scaleY(1); }
    30%  { transform: var(--ppi-bt,) scaleX(1.25) scaleY(0.75); }
    40%  { transform: var(--ppi-bt,) scaleX(0.75) scaleY(1.25); }
    50%  { transform: var(--ppi-bt,) scaleX(1.15) scaleY(0.85); }
    65%  { transform: var(--ppi-bt,) scaleX(0.95) scaleY(1.05); }
    75%  { transform: var(--ppi-bt,) scaleX(1.05) scaleY(0.95); }
    100% { transform: var(--ppi-bt,) scaleX(1) scaleY(1); }
  }
  .ppi-rubber-band { animation: ppi-rubber-band var(--ppi-dur, 0.9s) ease-in-out var(--ppi-delay, 0s) var(--ppi-count, infinite); }
`
