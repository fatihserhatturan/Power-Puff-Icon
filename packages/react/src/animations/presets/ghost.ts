export const className = 'ppi-ghost'
export const durations = { slow: '5s', normal: '3s', fast: '1.5s' } as const
export const css = `
  @keyframes ppi-ghost {
    0%,100% { opacity:1;    filter:blur(0px)   brightness(1);   transform:var(--ppi-bt,) translateY(0); }
    25%     { opacity:0.35; filter:blur(1.5px) brightness(1.2); transform:var(--ppi-bt,) translateY(-3px); }
    50%     { opacity:0.75; filter:blur(0.5px) brightness(0.9); transform:var(--ppi-bt,) translateY(-1px); }
    75%     { opacity:0.25; filter:blur(2px)   brightness(1.1); transform:var(--ppi-bt,) translateY(-4px); }
  }
  .ppi-ghost { animation: ppi-ghost var(--ppi-dur, 3s) ease-in-out var(--ppi-delay, 0s) var(--ppi-count, infinite); }
`
