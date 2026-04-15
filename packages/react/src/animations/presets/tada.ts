export const className = 'ppi-tada'
export const durations = { slow: '1.4s', normal: '0.8s', fast: '0.4s' } as const
export const css = `
  @keyframes ppi-tada {
    0%              { transform: var(--ppi-bt,) scale(1) rotate(0deg); }
    10%,20%         { transform: var(--ppi-bt,) scale(0.9) rotate(-3deg); }
    30%,50%,70%,90% { transform: var(--ppi-bt,) scale(1.1) rotate(3deg); }
    40%,60%,80%     { transform: var(--ppi-bt,) scale(1.1) rotate(-3deg); }
    100%            { transform: var(--ppi-bt,) scale(1) rotate(0deg); }
  }
  .ppi-tada { animation: ppi-tada var(--ppi-dur, 0.8s) ease-in-out var(--ppi-delay, 0s) var(--ppi-count, infinite); }
`
