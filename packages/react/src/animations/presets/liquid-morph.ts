export const className = 'ppi-liquid-morph'
export const durations = { slow: '6s', normal: '3.5s', fast: '1.8s' } as const
export const css = `
  @keyframes ppi-liquid-morph {
    /*
     * Organic liquid deformation — the icon surface behaves like a viscous
     * fluid under low-frequency vibration. Non-uniform scale on X/Y axes
     * combined with small skew angles creates the illusion of surface tension
     * stretching and compressing. Keyframe spacing is intentionally irregular
     * (0, 18, 35, 52, 68, 82, 100) to avoid the mechanical feel of even steps.
     *
     * blur(0.2–0.4px) at peak deformation mimics motion smear visible in
     * real slow-motion fluid footage — the boundary is never perfectly crisp
     * when the surface is actively deforming.
     */
    0%   {
      transform: var(--ppi-bt,) scale(1, 1)       skewX(0deg)    skewY(0deg);
      filter: none;
    }
    18%  {
      transform: var(--ppi-bt,) scale(1.06, 0.94) skewX(2.5deg)  skewY(1deg);
      filter: blur(0.2px);
    }
    35%  {
      transform: var(--ppi-bt,) scale(0.94, 1.09) skewX(-2deg)   skewY(-1.5deg);
      filter: none;
    }
    52%  {
      transform: var(--ppi-bt,) scale(1.08, 0.93) skewX(3deg)    skewY(1.5deg);
      filter: blur(0.35px);
    }
    68%  {
      transform: var(--ppi-bt,) scale(0.95, 1.07) skewX(-1.5deg) skewY(-1deg);
      filter: blur(0.15px);
    }
    82%  {
      transform: var(--ppi-bt,) scale(1.04, 0.97) skewX(1deg)    skewY(0.5deg);
      filter: none;
    }
    100% {
      transform: var(--ppi-bt,) scale(1, 1)       skewX(0deg)    skewY(0deg);
      filter: none;
    }
  }
  .ppi-liquid-morph {
    animation: ppi-liquid-morph var(--ppi-dur, 3.5s) ease-in-out var(--ppi-delay, 0s) var(--ppi-count, infinite);
  }
`
