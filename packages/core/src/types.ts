/**
 * Icon size variants.
 * Can be extended with numeric values for custom sizes.
 */
export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | number

/**
 * Base props shared across all framework adapters.
 * Each framework package (React, Vue, Svelte…) maps these to its own prop types.
 */
export interface IconBaseProps {
  /** Icon size — named variant or pixel value */
  size?: IconSize
  /** Stroke/fill color — any valid CSS color */
  color?: string
  /** CSS class name */
  className?: string
  /** Inline style */
  style?: Record<string, string | number>
  /** Accessible label. Omit for decorative icons */
  label?: string
  /** Stroke width in pixels (default: 2) */
  strokeWidth?: number
}

/**
 * Metadata embedded in every generated icon module.
 */
export interface IconMeta {
  name: string
  category: string
  tags: string[]
  version: string
}

/**
 * Resolved pixel dimensions for a given IconSize value.
 */
export const SIZE_MAP: Record<string, number> = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32,
  '2xl': 48,
}

/**
 * Resolve an IconSize value to a pixel number.
 */
export function resolveSize(size: IconSize = 'md'): number {
  if (typeof size === 'number') return size
  return SIZE_MAP[size] ?? SIZE_MAP.md
}
