export const className = 'ppi-flash'
export const durations = { slow: '1.4s', normal: '0.8s', fast: '0.4s' } as const
export const css = `
  @keyframes ppi-flash {
    /*
     * Two-burst camera-flash pattern with asymmetric discharge curves:
     *
     * Each flash fires with ease-out (instant to full brightness) then
     * decays with ease-in (slow, natural fade) — matching the physics of
     * a real xenon or LED flash discharging its capacitor.
     *
     * The two bursts are offset (15% and 50%) with a brief dim between
     * them, then a longer rest period (65%→100%) so the eye has time to
     * recover before the next loop. This rhythm reads as deliberate
     * "double-tap" signalling rather than a mindless strobe.
     */
    0%  { opacity: 0.15; animation-timing-function: ease-out; }
    15% { opacity: 1;    animation-timing-function: ease-in; }
    35% { opacity: 0.15; animation-timing-function: ease-out; }
    50% { opacity: 1;    animation-timing-function: ease-in; }
    65%,100% { opacity: 0.15; }
  }
  .ppi-flash {
    animation: ppi-flash var(--ppi-dur, 0.8s) linear var(--ppi-delay, 0s) var(--ppi-count, infinite);
  }
`
