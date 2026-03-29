import { describe, it, expect } from 'vitest'
import { resolveSize, SIZE_MAP } from '../types'

describe('resolveSize', () => {
  it('named size xs → 12', () => {
    expect(resolveSize('xs')).toBe(12)
  })

  it('named size sm → 16', () => {
    expect(resolveSize('sm')).toBe(16)
  })

  it('named size md → 20', () => {
    expect(resolveSize('md')).toBe(20)
  })

  it('named size lg → 24', () => {
    expect(resolveSize('lg')).toBe(24)
  })

  it('named size xl → 32', () => {
    expect(resolveSize('xl')).toBe(32)
  })

  it('named size 2xl → 48', () => {
    expect(resolveSize('2xl')).toBe(48)
  })

  it('numeric size passes through unchanged', () => {
    expect(resolveSize(36)).toBe(36)
    expect(resolveSize(100)).toBe(100)
    expect(resolveSize(1)).toBe(1)
  })

  it('undefined defaults to md (20)', () => {
    expect(resolveSize(undefined)).toBe(20)
  })

  it('unknown string falls back to md (20)', () => {
    // @ts-expect-error — intentional invalid value
    expect(resolveSize('unknown')).toBe(20)
  })
})

describe('SIZE_MAP', () => {
  it('contains all 6 named sizes', () => {
    const expectedKeys = ['xs', 'sm', 'md', 'lg', 'xl', '2xl']
    expectedKeys.forEach((key) => {
      expect(SIZE_MAP).toHaveProperty(key)
      expect(typeof SIZE_MAP[key]).toBe('number')
    })
  })

  it('values are strictly increasing', () => {
    const values = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'].map((k) => SIZE_MAP[k])
    for (let i = 1; i < values.length; i++) {
      expect(values[i]).toBeGreaterThan(values[i - 1])
    }
  })
})
