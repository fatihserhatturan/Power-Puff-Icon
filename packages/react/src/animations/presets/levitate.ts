export const className = 'ppi-levitate'
export const durations = { slow: '5s', normal: '3s', fast: '1.5s' } as const
export const css = `
  @keyframes ppi-levitate {
    0%,100% { transform:var(--ppi-bt,) perspective(160px) translateY(0)    rotateX(0deg); filter:drop-shadow(0 2px 4px rgba(0,0,0,0.3)); }
    50%     { transform:var(--ppi-bt,) perspective(160px) translateY(-7px) rotateX(8deg); filter:drop-shadow(0 10px 14px rgba(0,0,0,0.12)); }
  }
  .ppi-levitate { animation: ppi-levitate var(--ppi-dur, 3s) ease-in-out var(--ppi-delay, 0s) var(--ppi-count, infinite); }
`
