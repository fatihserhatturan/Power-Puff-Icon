export const className = 'ppi-erase'
export const durations = { slow: '2s', normal: '1s', fast: '0.5s' } as const
export const css = `
  @keyframes ppi-erase {
    from { stroke-dashoffset: 0; }
    to   { stroke-dashoffset: var(--ppi-draw-len, 100); }
  }
  .ppi-erase path,
  .ppi-erase circle,
  .ppi-erase line,
  .ppi-erase polyline,
  .ppi-erase rect,
  .ppi-erase ellipse {
    stroke-dasharray: var(--ppi-draw-len, 100);
    stroke-dashoffset: 0;
    animation: ppi-erase var(--ppi-dur, 1s) ease-in var(--ppi-delay, 0s) var(--ppi-count, 1) forwards;
  }
`
