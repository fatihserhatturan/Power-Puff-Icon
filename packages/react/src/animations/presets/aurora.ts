export const className = 'ppi-aurora'
export const durations = { slow: '8s', normal: '4s', fast: '2s' } as const
export const css = `
  /*
   * CSS Houdini @property — registers --ppi-aurora-color as an animatable
   * <color> token. Without this declaration the browser treats custom
   * properties as opaque strings and cannot interpolate between colour
   * values, resulting in a hard cut instead of a smooth gradient. The
   * @property rule makes the cross-browser colour transition possible with
   * zero JavaScript.
   */
  @property --ppi-aurora-color {
    syntax: '<color>';
    inherits: false;
    initial-value: #06b6d4;
  }

  @keyframes ppi-aurora {
    /*
     * Northern-lights glow that cycles through the aurora spectrum:
     * cyan → violet → rose → emerald → back to cyan. Because
     * --ppi-aurora-color is a registered @property, the browser smoothly
     * interpolates through each hue stop in perceptual colour space rather
     * than jumping. The glow radius breathes slightly (8px → 14px → 10px)
     * to reinforce the living, atmospheric quality of a real aurora.
     */
    0%   {
      --ppi-aurora-color: #06b6d4;
      filter: drop-shadow(0 0 8px var(--ppi-aurora-color))
              drop-shadow(0 0 16px var(--ppi-aurora-color))
              brightness(1.15);
    }
    25%  {
      --ppi-aurora-color: #8b5cf6;
      filter: drop-shadow(0 0 12px var(--ppi-aurora-color))
              drop-shadow(0 0 22px var(--ppi-aurora-color))
              brightness(1.25);
    }
    50%  {
      --ppi-aurora-color: #ec4899;
      filter: drop-shadow(0 0 10px var(--ppi-aurora-color))
              drop-shadow(0 0 18px var(--ppi-aurora-color))
              brightness(1.2);
    }
    75%  {
      --ppi-aurora-color: #10b981;
      filter: drop-shadow(0 0 14px var(--ppi-aurora-color))
              drop-shadow(0 0 24px var(--ppi-aurora-color))
              brightness(1.3);
    }
    100% {
      --ppi-aurora-color: #06b6d4;
      filter: drop-shadow(0 0 8px var(--ppi-aurora-color))
              drop-shadow(0 0 16px var(--ppi-aurora-color))
              brightness(1.15);
    }
  }
  .ppi-aurora {
    animation: ppi-aurora var(--ppi-dur, 4s) ease-in-out var(--ppi-delay, 0s) var(--ppi-count, infinite);
  }
`
