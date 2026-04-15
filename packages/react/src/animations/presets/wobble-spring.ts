import { dampedOscillation } from '../physics'

export const durations = { slow: '2.5s', normal: '1.5s', fast: '0.8s' } as const

export function buildKeyframes(baseTransform: string): Keyframe[] {
  const bt = baseTransform ? baseTransform + ' ' : ''
  const kf = dampedOscillation(12, 1.8, 3.5, 50)
  return kf.map(f => ({ offset: f.offset, transform: `${bt}rotate(${f.value.toFixed(2)}deg)` }))
}
