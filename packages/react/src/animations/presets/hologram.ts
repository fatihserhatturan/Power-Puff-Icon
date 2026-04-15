export const className = 'ppi-hologram'
export const durations = { slow: '8s', normal: '4s', fast: '2s' } as const
export const css = `
  @keyframes ppi-hologram {
    0%   { filter:hue-rotate(0deg)   brightness(1);   opacity:0.9;  transform:var(--ppi-bt,) skewX(0deg); }
    25%  { filter:hue-rotate(90deg)  brightness(1.2); opacity:0.65; transform:var(--ppi-bt,) skewX(1deg); }
    50%  { filter:hue-rotate(180deg) brightness(0.8); opacity:1;    transform:var(--ppi-bt,) skewX(-1deg); }
    75%  { filter:hue-rotate(270deg) brightness(1.3); opacity:0.6;  transform:var(--ppi-bt,) skewX(0.5deg); }
    100% { filter:hue-rotate(360deg) brightness(1);   opacity:0.9;  transform:var(--ppi-bt,) skewX(0deg); }
  }
  .ppi-hologram { animation: ppi-hologram var(--ppi-dur, 4s) linear var(--ppi-delay, 0s) var(--ppi-count, infinite); }
`
