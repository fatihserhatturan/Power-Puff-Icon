export const className = 'ppi-heartbeat'
export const durations = { slow: '2s', normal: '1.2s', fast: '0.6s' } as const
export const css = `
  @keyframes ppi-heartbeat {
    /*
     * Authentic double-peak EKG pattern:
     *
     * First beat (0%→14%→28%): the smaller "P wave" — a quick snap up to
     * 1.12x followed by a snap back. ease-out on each rise (fast snap up)
     * and ease-in-out on each fall (smooth return) mimics the elastic
     * rebound of a real heartbeat.
     *
     * Second beat (28%→38%→55%): the main "QRS complex" — larger spike to
     * 1.28x, faster rise window (10% of duration), same elastic return.
     *
     * Rest period (55%→100%): a full 45% of the cycle is spent at rest —
     * matching a real heart at 80 bpm (diastole is longer than systole).
     * This pause makes the double-beat feel snappy and punchy rather than
     * mechanical.
     *
     * Outer easing is linear so the per-keyframe timing functions drive
     * each segment independently.
     */
    0%  { transform: var(--ppi-bt,) scale(1);    animation-timing-function: ease-out; }
    14% { transform: var(--ppi-bt,) scale(1.12); animation-timing-function: ease-in-out; }
    28% { transform: var(--ppi-bt,) scale(1);    animation-timing-function: ease-out; }
    38% { transform: var(--ppi-bt,) scale(1.28); animation-timing-function: ease-in-out; }
    55%,100% { transform: var(--ppi-bt,) scale(1); }
  }
  .ppi-heartbeat {
    animation: ppi-heartbeat var(--ppi-dur, 1.2s) linear var(--ppi-delay, 0s) var(--ppi-count, infinite);
  }
`
