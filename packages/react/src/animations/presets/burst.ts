export const className = 'ppi-burst'
export const durations = { slow: '1s', normal: '0.6s', fast: '0.3s' } as const
export const css = `
  @keyframes ppi-burst {
    0%   { transform:var(--ppi-bt,) scale(1);    filter:brightness(1)   saturate(1)   blur(0px); opacity:1; }
    12%  { transform:var(--ppi-bt,) scale(1.35); filter:brightness(2)   saturate(2.5) blur(1px); opacity:0.85; }
    28%  { transform:var(--ppi-bt,) scale(0.92); filter:brightness(1.1) saturate(1.2) blur(0px); opacity:1; }
    42%  { transform:var(--ppi-bt,) scale(1.06); filter:brightness(1.2); }
    100% { transform:var(--ppi-bt,) scale(1);    filter:brightness(1)   saturate(1); opacity:1; }
  }
  .ppi-burst { animation: ppi-burst var(--ppi-dur, 0.6s) ease-out var(--ppi-delay, 0s) var(--ppi-count, 1) both; }
`
