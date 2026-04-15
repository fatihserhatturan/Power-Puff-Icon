export const className = 'ppi-ping'
export const durations = { slow: '1.8s', normal: '1s', fast: '0.5s' } as const
export const css = `
  @keyframes ppi-ping {
    0%       { transform: var(--ppi-bt,) scale(1);   opacity: 1; }
    75%,100% { transform: var(--ppi-bt,) scale(1.3); opacity: 0; }
  }
  .ppi-ping { animation: ppi-ping var(--ppi-dur, 1s) ease-out var(--ppi-delay, 0s) var(--ppi-count, infinite); }
`
