export const className = 'ppi-glitch'
export const durations = { slow: '0.8s', normal: '0.4s', fast: '0.2s' } as const
export const css = `
  @keyframes ppi-glitch {
    0%,100% { transform: var(--ppi-bt,) translateX(0); filter: none; }
    2%      { transform: var(--ppi-bt,) translateX(-3px); filter: hue-rotate(90deg); }
    4%      { transform: var(--ppi-bt,) translateX(3px) skewX(2deg); filter: hue-rotate(180deg) saturate(2); }
    6%      { transform: var(--ppi-bt,) translateX(-2px); filter: hue-rotate(270deg); }
    8%      { transform: var(--ppi-bt,) translateX(0); filter: none; }
    52%     { transform: var(--ppi-bt,) translateX(0); filter: none; }
    54%     { transform: var(--ppi-bt,) translateX(2px) skewX(-1deg); filter: hue-rotate(90deg) saturate(1.5); }
    56%     { transform: var(--ppi-bt,) translateX(-3px); filter: hue-rotate(180deg); }
    58%     { transform: var(--ppi-bt,) translateX(0); filter: none; }
  }
  .ppi-glitch { animation: ppi-glitch var(--ppi-dur, 0.4s) linear var(--ppi-delay, 0s) var(--ppi-count, infinite); }
`
