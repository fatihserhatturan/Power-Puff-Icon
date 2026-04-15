export const className = 'ppi-wiggle'
export const durations = { slow: '1s', normal: '0.6s', fast: '0.3s' } as const
export const css = `
  @keyframes ppi-wiggle {
    0%,100% { transform: var(--ppi-bt,) rotate(0deg); }
    25%     { transform: var(--ppi-bt,) rotate(-10deg); }
    75%     { transform: var(--ppi-bt,) rotate(10deg); }
  }
  .ppi-wiggle { animation: ppi-wiggle var(--ppi-dur, 0.6s) ease-in-out var(--ppi-delay, 0s) var(--ppi-count, infinite); }
`
