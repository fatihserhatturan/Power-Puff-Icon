import { resolveSize } from '@beluga-icon/core'
import type { IconBaseProps, IconFlip } from '@beluga-icon/core'
import { forwardRef, type SVGProps } from 'react'
import { useIconContext } from '../IconProvider'

export interface IconProps
  extends IconBaseProps,
    Omit<SVGProps<SVGSVGElement>, 'color' | 'style' | 'strokeWidth' | 'rotate' | 'speed' | 'strokeLinecap' | 'strokeLinejoin' | 'opacity'> {}

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
    @keyframes ppi-bounce {
      0%,100% { transform: var(--ppi-bt,) translateY(0); animation-timing-function: ease-in; }
      50%     { transform: var(--ppi-bt,) translateY(-6px); animation-timing-function: ease-out; }
    }
    @keyframes ppi-shake {
      0%,100% { transform: var(--ppi-bt,) translateX(0); }
      20%     { transform: var(--ppi-bt,) translateX(-4px); }
      40%     { transform: var(--ppi-bt,) translateX(4px); }
      60%     { transform: var(--ppi-bt,) translateX(-4px); }
      80%     { transform: var(--ppi-bt,) translateX(4px); }
    }
    @keyframes ppi-wiggle {
      0%,100% { transform: var(--ppi-bt,) rotate(0deg); }
      25%     { transform: var(--ppi-bt,) rotate(-10deg); }
      75%     { transform: var(--ppi-bt,) rotate(10deg); }
    }
    @keyframes ppi-ping {
      0%       { transform: var(--ppi-bt,) scale(1);   opacity: 1; }
      75%,100% { transform: var(--ppi-bt,) scale(1.3); opacity: 0; }
    }
    @keyframes ppi-blink {
      0%,100% { opacity: 1; }
      50%     { opacity: 0; }
    }
    @keyframes ppi-float {
      0%,100% { transform: var(--ppi-bt,) translateY(0); }
      50%     { transform: var(--ppi-bt,) translateY(-4px); }
    }
    .ppi-spin   { animation: ppi-spin   var(--ppi-dur, 1s)   linear      var(--ppi-delay, 0s) var(--ppi-count, infinite); }
    .ppi-pulse  { animation: ppi-pulse  var(--ppi-dur, 1s)   ease-in-out var(--ppi-delay, 0s) var(--ppi-count, infinite); }
    .ppi-bounce { animation: ppi-bounce var(--ppi-dur, 0.8s) ease-in-out var(--ppi-delay, 0s) var(--ppi-count, infinite); }
    .ppi-shake  { animation: ppi-shake  var(--ppi-dur, 0.5s) ease-in-out var(--ppi-delay, 0s) var(--ppi-count, infinite); }
    .ppi-wiggle { animation: ppi-wiggle var(--ppi-dur, 0.6s) ease-in-out var(--ppi-delay, 0s) var(--ppi-count, infinite); }
    .ppi-ping   { animation: ppi-ping   var(--ppi-dur, 1s)   ease-out    var(--ppi-delay, 0s) var(--ppi-count, infinite); }
    .ppi-blink  { animation: ppi-blink  var(--ppi-dur, 1s)   step-start  var(--ppi-delay, 0s) var(--ppi-count, infinite); }
    .ppi-float  { animation: ppi-float  var(--ppi-dur, 3s)   ease-in-out var(--ppi-delay, 0s) var(--ppi-count, infinite); }
    @keyframes ppi-heartbeat {
      0%       { transform: var(--ppi-bt,) scale(1); }
      14%      { transform: var(--ppi-bt,) scale(1.15); }
      28%      { transform: var(--ppi-bt,) scale(1); }
      42%      { transform: var(--ppi-bt,) scale(1.3); }
      70%,100% { transform: var(--ppi-bt,) scale(1); }
    }
    @keyframes ppi-flash {
      0%,100% { opacity: 1; }
      25%,75% { opacity: 0; }
      50%     { opacity: 1; }
    }
    @keyframes ppi-tada {
      0%              { transform: var(--ppi-bt,) scale(1) rotate(0deg); }
      10%,20%         { transform: var(--ppi-bt,) scale(0.9) rotate(-3deg); }
      30%,50%,70%,90% { transform: var(--ppi-bt,) scale(1.1) rotate(3deg); }
      40%,60%,80%     { transform: var(--ppi-bt,) scale(1.1) rotate(-3deg); }
      100%            { transform: var(--ppi-bt,) scale(1) rotate(0deg); }
    }
    @keyframes ppi-jello {
      0%,100% { transform: var(--ppi-bt,) skewX(0deg) skewY(0deg); }
      11.1%   { transform: var(--ppi-bt,) skewX(-12.5deg) skewY(-12.5deg); }
      22.2%   { transform: var(--ppi-bt,) skewX(6.25deg) skewY(6.25deg); }
      33.3%   { transform: var(--ppi-bt,) skewX(-3.125deg) skewY(-3.125deg); }
      44.4%   { transform: var(--ppi-bt,) skewX(1.5625deg) skewY(1.5625deg); }
      55.5%   { transform: var(--ppi-bt,) skewX(-0.78125deg) skewY(-0.78125deg); }
      66.6%   { transform: var(--ppi-bt,) skewX(0.390625deg) skewY(0.390625deg); }
      77.7%   { transform: var(--ppi-bt,) skewX(-0.1953125deg) skewY(-0.1953125deg); }
    }
    @keyframes ppi-swing {
      0%   { transform: var(--ppi-bt,) rotate(0deg); }
      20%  { transform: var(--ppi-bt,) rotate(15deg); }
      40%  { transform: var(--ppi-bt,) rotate(-10deg); }
      60%  { transform: var(--ppi-bt,) rotate(5deg); }
      80%  { transform: var(--ppi-bt,) rotate(-5deg); }
      100% { transform: var(--ppi-bt,) rotate(0deg); }
    }
    @keyframes ppi-rubber-band {
      0%   { transform: var(--ppi-bt,) scaleX(1) scaleY(1); }
      30%  { transform: var(--ppi-bt,) scaleX(1.25) scaleY(0.75); }
      40%  { transform: var(--ppi-bt,) scaleX(0.75) scaleY(1.25); }
      50%  { transform: var(--ppi-bt,) scaleX(1.15) scaleY(0.85); }
      65%  { transform: var(--ppi-bt,) scaleX(0.95) scaleY(1.05); }
      75%  { transform: var(--ppi-bt,) scaleX(1.05) scaleY(0.95); }
      100% { transform: var(--ppi-bt,) scaleX(1) scaleY(1); }
    }
    @keyframes ppi-flip-x {
      0%   { transform: var(--ppi-bt,) perspective(400px) rotateY(0deg); }
      40%  { transform: var(--ppi-bt,) perspective(400px) rotateY(-20deg); animation-timing-function: ease-in; }
      60%  { transform: var(--ppi-bt,) perspective(400px) rotateY(10deg); }
      80%  { transform: var(--ppi-bt,) perspective(400px) rotateY(-5deg); }
      100% { transform: var(--ppi-bt,) perspective(400px) rotateY(0deg); }
    }
    @keyframes ppi-breathe {
      0%,100% { opacity: 1; }
      50%     { opacity: 0.4; }
    }
    .ppi-heartbeat   { animation: ppi-heartbeat   var(--ppi-dur, 1.2s) ease-in-out var(--ppi-delay, 0s) var(--ppi-count, infinite); }
    .ppi-flash       { animation: ppi-flash        var(--ppi-dur, 0.8s) ease-in-out var(--ppi-delay, 0s) var(--ppi-count, infinite); }
    .ppi-tada        { animation: ppi-tada         var(--ppi-dur, 0.8s) ease-in-out var(--ppi-delay, 0s) var(--ppi-count, infinite); }
    .ppi-jello       { animation: ppi-jello        var(--ppi-dur, 0.9s) ease-in-out var(--ppi-delay, 0s) var(--ppi-count, infinite); }
    .ppi-swing       { animation: ppi-swing        var(--ppi-dur, 1s)   ease-in-out var(--ppi-delay, 0s) var(--ppi-count, infinite); transform-origin: top center; }
    .ppi-rubber-band { animation: ppi-rubber-band  var(--ppi-dur, 0.9s) ease-in-out var(--ppi-delay, 0s) var(--ppi-count, infinite); }
    .ppi-flip-x      { animation: ppi-flip-x       var(--ppi-dur, 1s)   ease-in-out var(--ppi-delay, 0s) var(--ppi-count, infinite); }
    .ppi-breathe     { animation: ppi-breathe      var(--ppi-dur, 4s)   ease-in-out var(--ppi-delay, 0s) var(--ppi-count, infinite); }
    @media (prefers-reduced-motion: reduce) {
      .ppi-spin, .ppi-pulse, .ppi-bounce, .ppi-shake,
      .ppi-wiggle, .ppi-ping, .ppi-blink, .ppi-float,
      .ppi-heartbeat, .ppi-flash, .ppi-tada, .ppi-jello,
      .ppi-swing, .ppi-rubber-band, .ppi-flip-x, .ppi-breathe {
        animation: none;
      }
    }
  `
  document.head.appendChild(el)
}

// Duration presets per animation type and speed
const SPEED_DURATION: Record<string, Record<string, string>> = {
  spin:   { slow: '2s',   normal: '1s',    fast: '0.4s' },
  pulse:  { slow: '2s',   normal: '1s',    fast: '0.4s' },
  bounce: { slow: '1.4s', normal: '0.8s',  fast: '0.4s' },
  shake:  { slow: '0.9s', normal: '0.5s',  fast: '0.25s' },
  wiggle: { slow: '1s',   normal: '0.6s',  fast: '0.3s' },
  ping:   { slow: '1.8s', normal: '1s',    fast: '0.5s' },
  blink:      { slow: '2s',   normal: '1s',    fast: '0.5s'  },
  float:      { slow: '4s',   normal: '3s',    fast: '1.5s'  },
  heartbeat:  { slow: '2s',   normal: '1.2s',  fast: '0.6s'  },
  flash:      { slow: '1.4s', normal: '0.8s',  fast: '0.4s'  },
  tada:       { slow: '1.4s', normal: '0.8s',  fast: '0.4s'  },
  jello:      { slow: '1.6s', normal: '0.9s',  fast: '0.45s' },
  swing:      { slow: '1.8s', normal: '1s',    fast: '0.5s'  },
  rubberBand: { slow: '1.6s', normal: '0.9s',  fast: '0.45s' },
  flipX:      { slow: '1.8s', normal: '1s',    fast: '0.5s'  },
  breathe:    { slow: '6s',   normal: '4s',    fast: '2s'    },
}

function resolveAnimDuration(animType: string, speed: string, duration?: number): string {
  if (duration != null) return `${duration}ms`
  return SPEED_DURATION[animType]?.[speed] ?? '1s'
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

type AnimKey = 'spin' | 'pulse' | 'bounce' | 'shake' | 'wiggle' | 'ping' | 'blink' | 'float'
             | 'heartbeat' | 'flash' | 'tada' | 'jello' | 'swing' | 'rubberBand' | 'flipX' | 'breathe'
const ANIM_PRIORITY: AnimKey[] = [
  'spin', 'pulse', 'bounce', 'shake', 'wiggle', 'ping', 'blink', 'float',
  'heartbeat', 'flash', 'tada', 'jello', 'swing', 'rubberBand', 'flipX', 'breathe',
]
const ANIM_CLASS: Partial<Record<AnimKey, string>> = {
  rubberBand: 'ppi-rubber-band',
  flipX:      'ppi-flip-x',
}
function animClass(key: AnimKey): string {
  return ANIM_CLASS[key] ?? `ppi-${key}`
}

/**
 * Base SVG wrapper used by every generated icon component.
 * Handles size, color, accessibility, transforms, animations, and forwards all native SVG props.
 * Prop resolution order: explicit prop > IconProvider context > variant preset > hardcoded default
 */
export const Icon = forwardRef<SVGSVGElement, IconProps & { children: React.ReactNode }>(
  function Icon(
    {
      size, color, className, label, strokeWidth, style, children,
      rotate, flip, spin, pulse, bounce, shake, wiggle, ping, blink, float,
      heartbeat, flash, tada, jello, swing, rubberBand, flipX, breathe,
      speed, duration, delay, iterationCount, easing,
      fill, strokeLinecap, strokeLinejoin, variant,
      opacity, shadow,
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
    const resolvedSpeed  = speed  ?? ctx.speed  ?? 'normal'

    // New animation booleans
    const resolvedSpin   = spin   ?? ctx.spin   ?? false
    const resolvedPulse  = pulse  ?? ctx.pulse  ?? false
    const resolvedBounce = bounce ?? ctx.bounce ?? false
    const resolvedShake  = shake  ?? ctx.shake  ?? false
    const resolvedWiggle = wiggle ?? ctx.wiggle ?? false
    const resolvedPing   = ping   ?? ctx.ping   ?? false
    const resolvedBlink  = blink  ?? ctx.blink  ?? false
    const resolvedFloat  = float  ?? ctx.float  ?? false

    const resolvedHeartbeat  = heartbeat  ?? ctx.heartbeat  ?? false
    const resolvedFlash      = flash      ?? ctx.flash      ?? false
    const resolvedTada       = tada       ?? ctx.tada       ?? false
    const resolvedJello      = jello      ?? ctx.jello      ?? false
    const resolvedSwing      = swing      ?? ctx.swing      ?? false
    const resolvedRubberBand = rubberBand ?? ctx.rubberBand ?? false
    const resolvedFlipX      = flipX      ?? ctx.flipX      ?? false
    const resolvedBreathe    = breathe    ?? ctx.breathe    ?? false

    // Fine-tuning
    const resolvedDuration      = duration      ?? ctx.duration
    const resolvedDelay         = delay         ?? ctx.delay
    const resolvedIterationCount = iterationCount ?? ctx.iterationCount
    const resolvedEasing        = easing        ?? ctx.easing

    // Style enhancements
    const resolvedOpacity = opacity ?? ctx.opacity
    const resolvedShadow  = shadow  ?? ctx.shadow  ?? false

    const animFlags: Record<AnimKey, boolean> = {
      spin: resolvedSpin, pulse: resolvedPulse, bounce: resolvedBounce,
      shake: resolvedShake, wiggle: resolvedWiggle, ping: resolvedPing,
      blink: resolvedBlink, float: resolvedFloat,
      heartbeat: resolvedHeartbeat, flash: resolvedFlash, tada: resolvedTada,
      jello: resolvedJello, swing: resolvedSwing, rubberBand: resolvedRubberBand,
      flipX: resolvedFlipX, breathe: resolvedBreathe,
    }
    const activeAnim = ANIM_PRIORITY.find(k => animFlags[k]) ?? null
    const isAnimating = activeAnim !== null

    if (isAnimating) ensureAnimStyles()

    const baseTransform = buildBaseTransform(resolvedRotate, resolvedFlip)

    // Build style: when animating, pass static transforms via CSS custom property so
    // the keyframe animation can compose them (rotate + spin works correctly).
    const computedStyle: Record<string, string | number> = {}

    if (isAnimating && baseTransform) {
      // trailing space is intentional — CSS var concat: "rotate(90deg) rotate(Xdeg)"
      computedStyle['--ppi-bt'] = baseTransform + ' '
    } else if (baseTransform) {
      computedStyle.transform = baseTransform
    }

    // Animation timing custom properties
    if (activeAnim) {
      computedStyle['--ppi-dur']   = resolveAnimDuration(activeAnim, resolvedSpeed, resolvedDuration)
      computedStyle['--ppi-delay'] = resolvedDelay != null ? `${resolvedDelay}ms` : '0s'
      computedStyle['--ppi-count'] = String(resolvedIterationCount ?? 'infinite')
      if (resolvedEasing != null) {
        computedStyle['--ppi-ease'] = resolvedEasing
      }
    }

    // Opacity
    if (resolvedOpacity != null) {
      computedStyle.opacity = resolvedOpacity
    }

    // Shadow — compose with any existing user filter (drop-shadow works with SVGs unlike box-shadow)
    if (resolvedShadow) {
      const shadowVal = 'drop-shadow(0 1px 3px rgba(0,0,0,0.25))'
      const userStyle = style as Record<string, string | number> | undefined
      const existingFilter = userStyle?.filter
      computedStyle.filter = existingFilter ? `${existingFilter} ${shadowVal}` : shadowVal
    }

    // Merge computed styles with user styles. If shadow was composed, omit filter from user style
    // to avoid double-applying it.
    let styleForMerge = style
    if (resolvedShadow && (style as Record<string, string | number> | undefined)?.filter) {
      const { filter: _f, ...rest } = style as Record<string, string | number>
      styleForMerge = rest
    }

    const finalStyle =
      Object.keys(computedStyle).length > 0
        ? { ...computedStyle, ...styleForMerge }
        : style

    // --- className composition ---
    const animClasses: string[] = []
    if (activeAnim) animClasses.push(animClass(activeAnim))

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
