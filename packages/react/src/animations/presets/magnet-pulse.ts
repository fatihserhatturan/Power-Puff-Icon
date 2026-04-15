import { simulateSpring } from '../physics'

export const durations = { slow: '2s', normal: '1.2s', fast: '0.6s' } as const

export function buildKeyframes(baseTransform: string): Keyframe[] {
  const bt = baseTransform ? baseTransform + ' ' : ''
  const half = simulateSpring(200, 14, 1, 1, 1.18, 20)
  const back = simulateSpring(200, 14, 1, 1.18, 1, 20)
  return [
    ...half.map(f => ({ offset: f.offset * 0.5, transform: `${bt}scale(${f.value.toFixed(4)})` })),
    ...back.slice(1).map(f => ({ offset: 0.5 + f.offset * 0.5, transform: `${bt}scale(${f.value.toFixed(4)})` })),
  ]
}
