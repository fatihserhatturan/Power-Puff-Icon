export const className = 'ppi-fade-up'
export const durations = { slow: '0.8s', normal: '0.5s', fast: '0.25s' } as const
export const css = `
  @keyframes ppi-fade-up {
    0%   { transform: var(--ppi-bt,) translateY(-16px); opacity: 0; }
    100% { transform: var(--ppi-bt,) translateY(0); opacity: 1; }
  }
  .ppi-fade-up { animation: ppi-fade-up var(--ppi-dur, 0.5s) ease-out var(--ppi-delay, 0s) var(--ppi-count, 1) both; }
`
