import type { AnimKey } from './types'
import * as springPop    from './presets/spring-pop'
import * as decay        from './presets/decay'
import * as magnetPulse  from './presets/magnet-pulse'
import * as wobbleSpring from './presets/wobble-spring'

// Re-export physics helpers for external use (e.g. custom WAAPI animations).
export { simulateSpring, dampedOscillation } from './physics'

// ---------------------------------------------------------------------------
// Speed → duration lookup for WAAPI animations
// ---------------------------------------------------------------------------

export const WAAPI_SPEED_DURATION: Record<string, Record<string, string>> = {
  springPop:    springPop.durations,
  decay:        decay.durations,
  magnetPulse:  magnetPulse.durations,
  wobbleSpring: wobbleSpring.durations,
}

// ---------------------------------------------------------------------------
// Preset dispatch table
// ---------------------------------------------------------------------------

type WaapiPreset = { buildKeyframes: (baseTransform: string) => Keyframe[] }

const WAAPI_PRESETS: Partial<Record<AnimKey, WaapiPreset>> = {
  springPop,
  decay,
  magnetPulse,
  wobbleSpring,
}

/** Build WAAPI Keyframe[] for the given physics-based animation key. */
export function buildWaapiKeyframes(key: AnimKey, baseTransform: string): Keyframe[] {
  return WAAPI_PRESETS[key]?.buildKeyframes(baseTransform) ?? []
}
