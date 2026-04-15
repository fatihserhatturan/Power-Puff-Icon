export const className = 'ppi-float'
export const durations = { slow: '4s', normal: '3s', fast: '1.5s' } as const
export const css = `
  @keyframes ppi-float {
    0%,100% { transform: var(--ppi-bt,) translateY(0); }
    50%     { transform: var(--ppi-bt,) translateY(-4px); }
  }
  .ppi-float { animation: ppi-float var(--ppi-dur, 3s) ease-in-out var(--ppi-delay, 0s) var(--ppi-count, infinite); }
`
