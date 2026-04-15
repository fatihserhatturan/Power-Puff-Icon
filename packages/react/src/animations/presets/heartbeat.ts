export const className = 'ppi-heartbeat'
export const durations = { slow: '2s', normal: '1.2s', fast: '0.6s' } as const
export const css = `
  @keyframes ppi-heartbeat {
    0%       { transform: var(--ppi-bt,) scale(1); }
    14%      { transform: var(--ppi-bt,) scale(1.15); }
    28%      { transform: var(--ppi-bt,) scale(1); }
    42%      { transform: var(--ppi-bt,) scale(1.3); }
    70%,100% { transform: var(--ppi-bt,) scale(1); }
  }
  .ppi-heartbeat { animation: ppi-heartbeat var(--ppi-dur, 1.2s) ease-in-out var(--ppi-delay, 0s) var(--ppi-count, infinite); }
`
