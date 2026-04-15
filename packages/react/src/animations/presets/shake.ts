export const className = 'ppi-shake'
export const durations = { slow: '0.9s', normal: '0.5s', fast: '0.25s' } as const
export const css = `
  @keyframes ppi-shake {
    0%,100% { transform: var(--ppi-bt,) translateX(0); }
    20%     { transform: var(--ppi-bt,) translateX(-4px); }
    40%     { transform: var(--ppi-bt,) translateX(4px); }
    60%     { transform: var(--ppi-bt,) translateX(-4px); }
    80%     { transform: var(--ppi-bt,) translateX(4px); }
  }
  .ppi-shake { animation: ppi-shake var(--ppi-dur, 0.5s) ease-in-out var(--ppi-delay, 0s) var(--ppi-count, infinite); }
`
