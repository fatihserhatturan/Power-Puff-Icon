export const className = 'ppi-rgb-split'
export const durations = { slow: '1.6s', normal: '0.9s', fast: '0.4s' } as const
export const css = `
  @keyframes ppi-rgb-split {
    /*
     * Cinematic chromatic aberration — red and cyan channels drift apart
     * as if a CRT lens is momentarily losing focus. Three displacement
     * events with decaying intensity, separated by clean rest periods so
     * the contrast between corrupted and pristine states reads clearly.
     *
     * drop-shadow is used as a proxy for the colour channels: a red shadow
     * offset left and a cyan shadow offset right replicate how a misaligned
     * RGB prism separates wavelengths. A very slight translateX nudges the
     * icon body itself to reinforce the optical dislocation.
     */
    0%,100% {
      filter: none;
      transform: var(--ppi-bt,) translateX(0);
    }
    /* Event 1 — primary hit */
    8%  {
      filter: drop-shadow(-4px 0 0 rgba(255,0,60,0.9)) drop-shadow(4px 0 0 rgba(0,240,255,0.9));
      transform: var(--ppi-bt,) translateX(-1px);
    }
    12% {
      filter: drop-shadow(5px 0 0 rgba(255,0,60,0.8)) drop-shadow(-5px 0 0 rgba(0,240,255,0.8)) blur(0.4px);
      transform: var(--ppi-bt,) translateX(2px);
    }
    18% {
      filter: drop-shadow(-2px 0 0 rgba(255,0,60,0.5)) drop-shadow(2px 0 0 rgba(0,240,255,0.5));
      transform: var(--ppi-bt,) translateX(0);
    }
    22% { filter: none; transform: var(--ppi-bt,) translateX(0); }

    /* Event 2 — echo */
    48% { filter: none; transform: var(--ppi-bt,) translateX(0); }
    52% {
      filter: drop-shadow(-6px 0 0 rgba(255,0,60,0.95)) drop-shadow(6px 0 0 rgba(0,240,255,0.95)) blur(0.6px);
      transform: var(--ppi-bt,) translateX(1px);
    }
    56% {
      filter: drop-shadow(3px 0 0 rgba(255,0,60,0.6)) drop-shadow(-3px 0 0 rgba(0,240,255,0.6));
      transform: var(--ppi-bt,) translateX(-1px);
    }
    60% { filter: none; transform: var(--ppi-bt,) translateX(0); }

    /* Event 3 — aftershock (subtle) */
    80% { filter: none; }
    83% {
      filter: drop-shadow(-3px 0 0 rgba(255,0,60,0.4)) drop-shadow(3px 0 0 rgba(0,240,255,0.4));
      transform: var(--ppi-bt,) translateX(0.5px);
    }
    86% { filter: none; transform: var(--ppi-bt,) translateX(0); }
  }
  .ppi-rgb-split {
    animation: ppi-rgb-split var(--ppi-dur, 0.9s) linear var(--ppi-delay, 0s) var(--ppi-count, infinite);
  }
`
