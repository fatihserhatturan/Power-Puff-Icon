export const className = 'ppi-tada'
export const durations = { slow: '1.4s', normal: '0.8s', fast: '0.4s' } as const
export const css = `
  @keyframes ppi-tada {
    /*
     * Theatrical "Ta-DA!" entrance with anticipation wind-up and
     * decaying oscillation:
     *
     * 0%→15%  Anticipation: compress & tilt left — loading energy
     *         (scale 0.85, -5deg) with ease-in (accelerate into wind-up)
     * 15%→30% Explosive release: snap to overshoot (scale 1.15, +4deg)
     *         ease-out for snappy expansion feel
     * 30%→85% Decaying wiggle: amplitude shrinks each pass (+4→-3→+2→-2deg)
     *         per-keyframe ease-in-out for smooth direction reversals
     * 85%→100%Settle back to rest with ease-out
     *
     * The decaying rotation mirrors the damped oscillation in wiggle/shake,
     * but combined with a scale pop it reads as "celebratory" rather than
     * "alarmed". Outer easing is linear so per-keyframe timing controls
     * each segment independently.
     */
    0%   { transform: var(--ppi-bt,) scale(1)    rotate(0deg);  animation-timing-function: ease-in; }
    15%  { transform: var(--ppi-bt,) scale(0.85) rotate(-5deg); animation-timing-function: ease-out; }
    30%  { transform: var(--ppi-bt,) scale(1.15) rotate(4deg);  animation-timing-function: ease-in-out; }
    45%  { transform: var(--ppi-bt,) scale(1.1)  rotate(-3deg); animation-timing-function: ease-in-out; }
    58%  { transform: var(--ppi-bt,) scale(1.08) rotate(2deg);  animation-timing-function: ease-in-out; }
    70%  { transform: var(--ppi-bt,) scale(1.05) rotate(-2deg); animation-timing-function: ease-in-out; }
    80%  { transform: var(--ppi-bt,) scale(1.02) rotate(1deg);  animation-timing-function: ease-out; }
    100% { transform: var(--ppi-bt,) scale(1)    rotate(0deg); }
  }
  .ppi-tada {
    animation: ppi-tada var(--ppi-dur, 0.8s) linear var(--ppi-delay, 0s) var(--ppi-count, infinite);
  }
`
