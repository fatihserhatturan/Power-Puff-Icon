export const className = 'ppi-wobble'
export const durations = { slow: '1.8s', normal: '1s', fast: '0.5s' } as const
export const css = `
  @keyframes ppi-wobble {
    0%   { transform: var(--ppi-bt,) translateX(0) rotateZ(0deg); }
    15%  { transform: var(--ppi-bt,) translateX(-6px) rotateZ(-5deg); }
    30%  { transform: var(--ppi-bt,) translateX(5px) rotateZ(3deg); }
    45%  { transform: var(--ppi-bt,) translateX(-3px) rotateZ(-2deg); }
    60%  { transform: var(--ppi-bt,) translateX(2px) rotateZ(1deg); }
    100% { transform: var(--ppi-bt,) translateX(0) rotateZ(0deg); }
  }
  .ppi-wobble { animation: ppi-wobble var(--ppi-dur, 1s) ease-in-out var(--ppi-delay, 0s) var(--ppi-count, infinite); }
`
