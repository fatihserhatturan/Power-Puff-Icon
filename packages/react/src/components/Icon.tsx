import { resolveSize } from '@power-puff/core'
import type { IconBaseProps, IconFlip } from '@power-puff/core'
import { forwardRef, type SVGProps } from 'react'
import { useIconContext } from '../IconProvider'

export interface IconProps
  extends IconBaseProps,
    Omit<SVGProps<SVGSVGElement>, 'color' | 'style' | 'strokeWidth' | 'rotate' | 'speed' | 'strokeLinecap' | 'strokeLinejoin'> {}

// ---------------------------------------------------------------------------
// Module-scope helpers
// ---------------------------------------------------------------------------

const VARIANT_PRESETS = {
  outline: { multiplier: 1,    linecap: 'round' as const, linejoin: 'round' as const },
  bold:    { multiplier: 1.25, linecap: 'round' as const, linejoin: 'round' as const },
  sharp:   { multiplier: 1,    linecap: 'butt'  as const, linejoin: 'miter' as const },
}

const ANIM_STYLE_ID = 'ppi-animations'

function ensureAnimStyles() {
  if (typeof document === 'undefined') return
  if (document.getElementById(ANIM_STYLE_ID)) return
  const el = document.createElement('style')
  el.id = ANIM_STYLE_ID
  el.textContent = `
    @keyframes ppi-spin {
      from { transform: var(--ppi-bt,) rotate(0deg); }
      to   { transform: var(--ppi-bt,) rotate(360deg); }
    }
    @keyframes ppi-pulse {
      0%,100% { transform: var(--ppi-bt,) scale(1); }
      50%     { transform: var(--ppi-bt,) scale(1.15); }
    }
    .ppi-spin-slow    { animation: ppi-spin  2s   linear      infinite; }
    .ppi-spin-normal  { animation: ppi-spin  1s   linear      infinite; }
    .ppi-spin-fast    { animation: ppi-spin  0.4s linear      infinite; }
    .ppi-pulse-slow   { animation: ppi-pulse 2s   ease-in-out infinite; }
    .ppi-pulse-normal { animation: ppi-pulse 1s   ease-in-out infinite; }
    .ppi-pulse-fast   { animation: ppi-pulse 0.4s ease-in-out infinite; }
  `
  document.head.appendChild(el)
}

function buildBaseTransform(rotate?: number, flip?: IconFlip): string {
  const parts: string[] = []
  if (rotate != null && rotate !== 0) parts.push(`rotate(${rotate}deg)`)
  if (flip === 'horizontal') parts.push('scaleX(-1)')
  else if (flip === 'vertical') parts.push('scaleY(-1)')
  else if (flip === 'both') parts.push('scale(-1,-1)')
  return parts.join(' ')
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

/**
 * Base SVG wrapper used by every generated icon component.
 * Handles size, color, accessibility, transforms, animations, and forwards all native SVG props.
 * Prop resolution order: explicit prop > IconProvider context > variant preset > hardcoded default
 */
export const Icon = forwardRef<SVGSVGElement, IconProps & { children: React.ReactNode }>(
  function Icon(
    {
      size, color, className, label, strokeWidth, style, children,
      rotate, flip, spin, pulse, speed, fill, strokeLinecap, strokeLinejoin, variant,
      ...rest
    },
    ref,
  ) {
    const ctx = useIconContext()
    const { classNamePrefix, classNameSuffix } = ctx

    // --- Size & color ---
    // ?? (nullish coalescing) is intentional over ||:
    // strokeWidth={0} and size={0} are valid values that || would incorrectly skip.
    const resolvedSize = size ?? ctx.size ?? 'md'
    const resolvedColor = color ?? ctx.color ?? 'currentColor'
    const px = resolveSize(resolvedSize)

    // --- Variant ---
    const resolvedVariant = variant ?? ctx.variant
    const preset = resolvedVariant ? VARIANT_PRESETS[resolvedVariant] : null

    // strokeWidth: if an explicit prop is given, skip variant multiplier entirely
    const baseStrokeWidth = ctx.strokeWidth ?? 2
    const resolvedStrokeWidth =
      strokeWidth != null
        ? strokeWidth
        : preset
          ? baseStrokeWidth * preset.multiplier
          : baseStrokeWidth

    // Stroke style: explicit prop > context > variant preset > hardcoded default
    const resolvedLinecap  = strokeLinecap  ?? ctx.strokeLinecap  ?? preset?.linecap  ?? 'round'
    const resolvedLinejoin = strokeLinejoin ?? ctx.strokeLinejoin ?? preset?.linejoin ?? 'round'

    // --- Fill ---
    const resolvedFill = fill ?? ctx.fill ?? 'none'

    // --- Transforms & animations ---
    const resolvedRotate = rotate ?? ctx.rotate
    const resolvedFlip   = flip   ?? ctx.flip
    const resolvedSpin   = spin   ?? ctx.spin   ?? false
    const resolvedPulse  = pulse  ?? ctx.pulse  ?? false
    const resolvedSpeed  = speed  ?? ctx.speed  ?? 'normal'

    const baseTransform = buildBaseTransform(resolvedRotate, resolvedFlip)
    const isAnimating = resolvedSpin || resolvedPulse

    if (isAnimating) ensureAnimStyles()

    // Build style: when animating, pass static transforms via CSS custom property so
    // the keyframe animation can compose them (rotate + spin works correctly).
    const computedStyle: Record<string, string | number> = {}
    if (isAnimating && baseTransform) {
      // trailing space is intentional — CSS var concat: "rotate(90deg) rotate(Xdeg)"
      computedStyle['--ppi-bt'] = baseTransform + ' '
    } else if (baseTransform) {
      computedStyle.transform = baseTransform
    }
    const finalStyle =
      Object.keys(computedStyle).length > 0
        ? { ...computedStyle, ...style }
        : style

    // --- className composition ---
    const animClasses: string[] = []
    if (resolvedSpin)  animClasses.push(`ppi-spin-${resolvedSpeed}`)
    if (resolvedPulse) animClasses.push(`ppi-pulse-${resolvedSpeed}`)

    const classParts = [classNamePrefix, className, ...animClasses, classNameSuffix].filter(Boolean)
    const finalClassName = classParts.length > 0 ? classParts.join(' ') : undefined

    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={px}
        height={px}
        viewBox="0 0 24 24"
        fill={resolvedFill}
        stroke={resolvedColor}
        strokeWidth={resolvedStrokeWidth}
        strokeLinecap={resolvedLinecap}
        strokeLinejoin={resolvedLinejoin}
        className={finalClassName}
        style={finalStyle as React.CSSProperties}
        aria-hidden={label ? undefined : true}
        aria-label={label}
        role={label ? 'img' : undefined}
        {...rest}
      >
        {children}
      </svg>
    )
  },
)
