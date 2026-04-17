export const className = 'ppi-shatter'
export const durations = { slow: '1.8s', normal: '1s', fast: '0.5s' } as const
export const css = `
  @keyframes ppi-shatter {
    /*
     * Explosive disintegration followed by phoenixlike reconstruction:
     *
     * 0%→12%  Impact flash: rapid scale-up + white-hot brightness spike.
     *         The icon appears to absorb a high-energy hit.
     *
     * 12%→38% Disintegration: scale collapses, rotation accelerates,
     *         blur deepens and opacity fades — the icon is fragmenting
     *         and dispersing outward. At 38% it is essentially gone.
     *
     * 38%→50% Void: completely transparent, no form. The observer expects
     *         loss, making the return more dramatic.
     *
     * 50%→72% Reconstruction: particles coalesce back. Scale overshoots to
     *         1.25, blur clears, opacity races to 1. The brightness spike at
     *         60% mimics the flash of pieces snapping back into place.
     *
     * 72%→100% Spring settle: three damping bounces (1.12 → 0.94 → 1.03 → 1)
     *          give the reformed icon physical weight and inertia.
     */
    0%   {
      transform: var(--ppi-bt,) scale(1) rotate(0deg);
      filter: brightness(1) blur(0px);
      opacity: 1;
    }
    12%  {
      transform: var(--ppi-bt,) scale(1.18) rotate(0deg);
      filter: brightness(3) saturate(0.2) blur(0px);
      opacity: 0.95;
    }
    38%  {
      transform: var(--ppi-bt,) scale(0.15) rotate(55deg);
      filter: brightness(0.4) blur(5px);
      opacity: 0.05;
    }
    50%  {
      transform: var(--ppi-bt,) scale(0.05) rotate(80deg);
      filter: brightness(0.1) blur(8px);
      opacity: 0;
    }
    60%  {
      transform: var(--ppi-bt,) scale(1.25) rotate(-8deg);
      filter: brightness(2.5) blur(1.5px);
      opacity: 0.75;
    }
    72%  {
      transform: var(--ppi-bt,) scale(1.12) rotate(2deg);
      filter: brightness(1.1) blur(0px);
      opacity: 1;
    }
    82%  {
      transform: var(--ppi-bt,) scale(0.94) rotate(-1deg);
      filter: brightness(1);
    }
    91%  {
      transform: var(--ppi-bt,) scale(1.03) rotate(0deg);
      filter: brightness(1.05);
    }
    100% {
      transform: var(--ppi-bt,) scale(1) rotate(0deg);
      filter: brightness(1) blur(0px);
      opacity: 1;
    }
  }
  .ppi-shatter {
    animation: ppi-shatter var(--ppi-dur, 1s) linear var(--ppi-delay, 0s) var(--ppi-count, 1) both;
  }
`
