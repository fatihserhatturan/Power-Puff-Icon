export const className = 'ppi-jello'
export const durations = { slow: '1.6s', normal: '0.9s', fast: '0.45s' } as const
export const css = `
  @keyframes ppi-jello {
    /*
     * Elastic jello-wobble with a sharp initial impact and geometric decay:
     *
     * The first deformation (-15deg) hits instantly (ease-out at 0%) to
     * simulate a collision or tap impulse — the icon snaps sideways as if
     * struck. Subsequent oscillations use ease-in-out so each direction
     * reversal feels smooth and spring-like rather than mechanical.
     *
     * Amplitude follows a ~0.5x geometric decay each half-period:
     * -15 → +7.5 → -3.75 → +1.875 → -0.9375 → +0.47 → -0.23 → 0
     * This is the natural response of an underdamped spring to an impulse.
     * Values are rounded to two decimal places for readability.
     *
     * The rest period (77.7%→100%) gives the eye a beat before the next
     * loop so rapid looping doesn't read as pure chaos.
     *
     * Outer easing is linear — per-keyframe timing controls each segment.
     */
    0%    { transform: var(--ppi-bt,) skewX(0deg)      skewY(0deg);      animation-timing-function: ease-out; }
    11.1% { transform: var(--ppi-bt,) skewX(-15deg)    skewY(-15deg);    animation-timing-function: ease-in-out; }
    22.2% { transform: var(--ppi-bt,) skewX(7.5deg)    skewY(7.5deg);    animation-timing-function: ease-in-out; }
    33.3% { transform: var(--ppi-bt,) skewX(-3.75deg)  skewY(-3.75deg);  animation-timing-function: ease-in-out; }
    44.4% { transform: var(--ppi-bt,) skewX(1.88deg)   skewY(1.88deg);   animation-timing-function: ease-in-out; }
    55.5% { transform: var(--ppi-bt,) skewX(-0.94deg)  skewY(-0.94deg);  animation-timing-function: ease-in-out; }
    66.6% { transform: var(--ppi-bt,) skewX(0.47deg)   skewY(0.47deg);   animation-timing-function: ease-in-out; }
    77.7% { transform: var(--ppi-bt,) skewX(-0.23deg)  skewY(-0.23deg);  animation-timing-function: ease-out; }
    88.8%,100% { transform: var(--ppi-bt,) skewX(0deg) skewY(0deg); }
  }
  .ppi-jello {
    animation: ppi-jello var(--ppi-dur, 0.9s) linear var(--ppi-delay, 0s) var(--ppi-count, infinite);
  }
`
