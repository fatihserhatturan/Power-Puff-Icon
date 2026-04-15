export const className = 'ppi-flip-x'
export const durations = { slow: '1.8s', normal: '1s', fast: '0.5s' } as const
export const css = `
  @keyframes ppi-flip-x {
    0%   { transform: var(--ppi-bt,) perspective(400px) rotateY(0deg); }
    40%  { transform: var(--ppi-bt,) perspective(400px) rotateY(-20deg); animation-timing-function: ease-in; }
    60%  { transform: var(--ppi-bt,) perspective(400px) rotateY(10deg); }
    80%  { transform: var(--ppi-bt,) perspective(400px) rotateY(-5deg); }
    100% { transform: var(--ppi-bt,) perspective(400px) rotateY(0deg); }
  }
  .ppi-flip-x { animation: ppi-flip-x var(--ppi-dur, 1s) ease-in-out var(--ppi-delay, 0s) var(--ppi-count, infinite); }
`
