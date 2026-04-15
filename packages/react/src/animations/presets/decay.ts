import { dampedOscillation } from '../physics'

export const durations = { slow: '2s', normal: '1.2s', fast: '0.6s' } as const

export function buildKeyframes(baseTransform: string): Keyframe[] {
  const bt = baseTransform ? baseTransform + ' ' : ''
  const kf = dampedOscillation(18, 2.5, 5, 50)
  return kf.map(f => ({ offset: f.offset, transform: `${bt}rotate(${f.value.toFixed(2)}deg)` }))
}
