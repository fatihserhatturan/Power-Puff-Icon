/**
 * Zero-dependency spring / damping physics simulators.
 * Used by WAAPI animation presets to bake physically accurate motion into keyframe arrays.
 */

/**
 * Numerically integrate a spring ODE (Hooke's law + damping).
 * Returns {offset, value} pairs where value is the animated property (scale or degrees).
 */
export function simulateSpring(
  stiffness: number,
  damping: number,
  mass: number,
  from: number,
  to: number,
  frames: number,
): Array<{ offset: number; value: number }> {
  const dt = 1 / frames
  let x = from - to, v = 0
  return Array.from({ length: frames + 1 }, (_, i) => {
    const F = -stiffness * x - damping * v
    v += (F / mass) * dt
    x += v * dt
    return { offset: i / frames, value: to + x }
  })
}

/**
 * Exponentially-decaying cosine oscillation — for rotational damping effects.
 */
export function dampedOscillation(
  amplitude: number,
  frequency: number,
  damping: number,
  frames: number,
): Array<{ offset: number; value: number }> {
  return Array.from({ length: frames + 1 }, (_, i) => {
    const t = i / frames
    return { offset: t, value: amplitude * Math.exp(-damping * t) * Math.cos(2 * Math.PI * frequency * t) }
  })
}
