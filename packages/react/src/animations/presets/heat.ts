export const className = 'ppi-heat'
export const durations = { slow: '3.5s', normal: '2s', fast: '1s' } as const
export const css = `
  @keyframes ppi-heat {
    0%,100% { transform:var(--ppi-bt,) scaleX(1)    scaleY(1);    filter:blur(0px)    brightness(1); }
    20%     { transform:var(--ppi-bt,) scaleX(1.02) scaleY(0.99); filter:blur(0.3px)  brightness(1.05); }
    40%     { transform:var(--ppi-bt,) scaleX(0.99) scaleY(1.01); filter:blur(0.5px)  brightness(0.97); }
    60%     { transform:var(--ppi-bt,) scaleX(1.01) scaleY(0.98); filter:blur(0.25px) brightness(1.03); }
    80%     { transform:var(--ppi-bt,) scaleX(0.98) scaleY(1.02); filter:blur(0.4px)  brightness(1.01); }
  }
  .ppi-heat { animation: ppi-heat var(--ppi-dur, 2s) ease-in-out var(--ppi-delay, 0s) var(--ppi-count, infinite); }
`
