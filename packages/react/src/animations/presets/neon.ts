export const className = 'ppi-neon'
export const durations = { slow: '3s', normal: '2s', fast: '0.8s' } as const
export const css = `
  @keyframes ppi-neon {
    0%, 100% {
      filter: drop-shadow(0 0 3px currentColor) drop-shadow(0 0 6px currentColor);
      opacity: 0.9;
    }
    50% {
      filter: drop-shadow(0 0 6px currentColor) drop-shadow(0 0 12px currentColor) drop-shadow(0 0 20px currentColor);
      opacity: 1;
    }
  }
  .ppi-neon { animation: ppi-neon var(--ppi-dur, 2s) ease-in-out var(--ppi-delay, 0s) var(--ppi-count, infinite); }
`
