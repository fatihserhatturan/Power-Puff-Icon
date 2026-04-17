export const className = 'ppi-cinematic'
export const durations = { slow: '2.4s', normal: '1.4s', fast: '0.7s' } as const
export const css = `
  @keyframes ppi-cinematic {
    /*
     * Anamorphic lens focus-pull — mimics the rack-focus technique used in
     * cinematic photography where a shallow depth-of-field blurs a subject
     * before pulling it sharply into focus.
     *
     * 0%→35%  Out-of-focus: subject is scaled slightly large (as if the
     *         lens plane is behind the sensor), heavily blurred, desaturated,
     *         and dim — the world before the reveal.
     *
     * 35%→65% Focus-pull: blur resolves rapidly, scale corrects toward 1,
     *         saturation and brightness rise as the subject "enters" the
     *         focal plane. A subtle scale overshoot at 65% (0.98) avoids
     *         the mechanical feel of landing exactly on 1.
     *
     * 65%→82% Lens flare moment: a brief brightness + slight glow via
     *         drop-shadow simulates light scattering off the front element
     *         just as the subject locks into sharp focus — a hallmark of
     *         anamorphic glass.
     *
     * 82%→100% Settle: brightness returns to neutral, scale lands at 1.
     */
    0%   {
      transform: var(--ppi-bt,) scale(1.28);
      filter: blur(7px) brightness(0.6) saturate(0.2);
      opacity: 0.25;
    }
    35%  {
      transform: var(--ppi-bt,) scale(1.08);
      filter: blur(2px) brightness(0.9) saturate(0.7);
      opacity: 0.75;
    }
    65%  {
      transform: var(--ppi-bt,) scale(0.98);
      filter: blur(0px) brightness(1.05) saturate(1.1);
      opacity: 1;
    }
    78%  {
      transform: var(--ppi-bt,) scale(1.01);
      filter: brightness(1.35) saturate(1.3)
              drop-shadow(0 0 6px rgba(255,255,255,0.5));
      opacity: 1;
    }
    100% {
      transform: var(--ppi-bt,) scale(1);
      filter: brightness(1) saturate(1);
      opacity: 1;
    }
  }
  .ppi-cinematic {
    animation: ppi-cinematic var(--ppi-dur, 1.4s) ease-out var(--ppi-delay, 0s) var(--ppi-count, 1) both;
  }
`
