import { simulateSpring } from '../physics'

export const durations = { slow: '1.2s', normal: '0.7s', fast: '0.4s' } as const

export function buildKeyframes(baseTransform: string): Keyframe[] {
  const bt = baseTransform ? baseTransform + ' ' : ''
  const kf = simulateSpring(280, 18, 1, 0, 1, 40)
  return kf.map(f => ({ offset: f.offset, transform: `${bt}scale(${f.value.toFixed(4)})` }))
}
