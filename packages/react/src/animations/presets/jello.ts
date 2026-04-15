export const className = 'ppi-jello'
export const durations = { slow: '1.6s', normal: '0.9s', fast: '0.45s' } as const
export const css = `
  @keyframes ppi-jello {
    0%,100% { transform: var(--ppi-bt,) skewX(0deg) skewY(0deg); }
    11.1%   { transform: var(--ppi-bt,) skewX(-12.5deg) skewY(-12.5deg); }
    22.2%   { transform: var(--ppi-bt,) skewX(6.25deg) skewY(6.25deg); }
    33.3%   { transform: var(--ppi-bt,) skewX(-3.125deg) skewY(-3.125deg); }
    44.4%   { transform: var(--ppi-bt,) skewX(1.5625deg) skewY(1.5625deg); }
    55.5%   { transform: var(--ppi-bt,) skewX(-0.78125deg) skewY(-0.78125deg); }
    66.6%   { transform: var(--ppi-bt,) skewX(0.390625deg) skewY(0.390625deg); }
    77.7%   { transform: var(--ppi-bt,) skewX(-0.1953125deg) skewY(-0.1953125deg); }
  }
  .ppi-jello { animation: ppi-jello var(--ppi-dur, 0.9s) ease-in-out var(--ppi-delay, 0s) var(--ppi-count, infinite); }
`
