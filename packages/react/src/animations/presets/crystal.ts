export const className = 'ppi-crystal'
export const durations = { slow: '5s', normal: '3s', fast: '1.5s' } as const
export const css = `
  @keyframes ppi-crystal {
    0%,100% { filter: brightness(1)   drop-shadow(0 0 0px transparent); }
    20%     { filter: brightness(1.4) drop-shadow(-2px 0 4px #ff6b6b) drop-shadow(2px 0 4px #6bc5ff); }
    40%     { filter: brightness(1.6) drop-shadow(0 -2px 6px #a8ff6b) drop-shadow(0 2px 6px #e06bff); }
    60%     { filter: brightness(1.3) drop-shadow(2px 0 4px #ffed6b) drop-shadow(-2px 0 4px #6bffed); }
    80%     { filter: brightness(1.5) drop-shadow(0 2px 5px #6b8fff) drop-shadow(0 -2px 5px #ff6b8f); }
  }
  .ppi-crystal { animation: ppi-crystal var(--ppi-dur, 3s) ease-in-out var(--ppi-delay, 0s) var(--ppi-count, infinite); }
`
