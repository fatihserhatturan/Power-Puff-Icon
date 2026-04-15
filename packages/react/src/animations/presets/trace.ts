export const className = 'ppi-trace'
export const durations = { slow: '4s', normal: '2s', fast: '1s' } as const
export const css = `
  @keyframes ppi-trace {
    0%   { stroke-dashoffset: 0; }
    100% { stroke-dashoffset: var(--ppi-trace-offset, -100); }
  }
  .ppi-trace path,
  .ppi-trace circle,
  .ppi-trace line,
  .ppi-trace polyline,
  .ppi-trace rect,
  .ppi-trace ellipse {
    stroke-dasharray: var(--ppi-trace-len, 30) calc(var(--ppi-draw-len, 100) - var(--ppi-trace-len, 30));
    stroke-dashoffset: 0;
    animation: ppi-trace var(--ppi-dur, 2s) linear var(--ppi-delay, 0s) var(--ppi-count, infinite);
  }
`
