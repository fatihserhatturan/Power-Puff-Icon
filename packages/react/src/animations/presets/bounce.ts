export const className = 'ppi-bounce'
export const durations = { slow: '1.4s', normal: '0.8s', fast: '0.4s' } as const
export const css = `
  @keyframes ppi-bounce {
    0%,100% { transform: var(--ppi-bt,) translateY(0); animation-timing-function: ease-in; }
    50%     { transform: var(--ppi-bt,) translateY(-6px); animation-timing-function: ease-out; }
  }
  .ppi-bounce { animation: ppi-bounce var(--ppi-dur, 0.8s) ease-in-out var(--ppi-delay, 0s) var(--ppi-count, infinite); }
`
