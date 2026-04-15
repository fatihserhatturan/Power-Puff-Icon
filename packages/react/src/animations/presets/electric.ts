export const className = 'ppi-electric'
export const durations = { slow: '1s', normal: '0.5s', fast: '0.25s' } as const
export const css = `
  @keyframes ppi-electric {
    0%,100% { transform:var(--ppi-bt,) translate(0,0);      filter:brightness(1)   hue-rotate(0deg); }
    5%      { transform:var(--ppi-bt,) translate(-2px,1px); filter:brightness(2.5) hue-rotate(185deg) saturate(4); }
    10%     { transform:var(--ppi-bt,) translate(2px,-1px); filter:brightness(1.8) hue-rotate(195deg); }
    15%     { transform:var(--ppi-bt,) translate(-1px,2px); filter:brightness(3)   hue-rotate(210deg) saturate(5); }
    20%     { transform:var(--ppi-bt,) translate(0,0);      filter:brightness(1)   hue-rotate(0deg); }
    78%     { transform:var(--ppi-bt,) translate(0,0);      filter:brightness(1); }
    80%     { transform:var(--ppi-bt,) translate(2px,-2px); filter:brightness(2.2) hue-rotate(190deg) saturate(3); }
    83%     { transform:var(--ppi-bt,) translate(-2px,1px); filter:brightness(3.5) hue-rotate(200deg); }
    86%     { transform:var(--ppi-bt,) translate(1px,-1px); filter:brightness(1.5) hue-rotate(185deg); }
    89%     { transform:var(--ppi-bt,) translate(0,0);      filter:brightness(1); }
  }
  .ppi-electric { animation: ppi-electric var(--ppi-dur, 0.5s) linear var(--ppi-delay, 0s) var(--ppi-count, infinite); }
`
