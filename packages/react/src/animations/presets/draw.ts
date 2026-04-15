export const className = 'ppi-draw'
export const durations = { slow: '2s', normal: '1s', fast: '0.5s' } as const
export const css = `
  @keyframes ppi-draw {
    from { stroke-dashoffset: var(--ppi-draw-len, 100); }
    to   { stroke-dashoffset: 0; }
  }
  .ppi-draw path,
  .ppi-draw circle,
  .ppi-draw line,
  .ppi-draw polyline,
  .ppi-draw rect,
  .ppi-draw ellipse {
    stroke-dasharray: var(--ppi-draw-len, 100);
    stroke-dashoffset: var(--ppi-draw-len, 100);
    animation: ppi-draw var(--ppi-dur, 1s) ease-out var(--ppi-delay, 0s) var(--ppi-count, 1) forwards;
  }
`
