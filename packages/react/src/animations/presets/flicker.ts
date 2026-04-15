export const className = 'ppi-flicker'
export const durations = { slow: '5s', normal: '3s', fast: '1.5s' } as const
export const css = `
  @keyframes ppi-flicker {
    0%,100% { opacity:1;    filter:brightness(1); }
    5%      { opacity:0.85; filter:brightness(0.8); }
    10%     { opacity:1;    filter:brightness(1.2); }
    15%     { opacity:0.2;  filter:brightness(0.4); }
    20%     { opacity:1;    filter:brightness(1.3); }
    25%     { opacity:0.7;  filter:brightness(0.7); }
    30%     { opacity:1;    filter:brightness(1); }
    68%     { opacity:1;    filter:brightness(1); }
    70%     { opacity:0.15; filter:brightness(0.3); }
    72%     { opacity:1;    filter:brightness(1.4); }
    74%     { opacity:0.6;  filter:brightness(0.6); }
    76%     { opacity:1;    filter:brightness(1.1); }
    78%     { opacity:0.3;  filter:brightness(0.5); }
    80%     { opacity:1;    filter:brightness(1); }
  }
  .ppi-flicker { animation: ppi-flicker var(--ppi-dur, 3s) linear var(--ppi-delay, 0s) var(--ppi-count, infinite); }
`
