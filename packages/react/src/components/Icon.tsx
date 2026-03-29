import { resolveSize } from '@power-puff/core'
import type { IconBaseProps } from '@power-puff/core'
import { forwardRef, type SVGProps } from 'react'

export interface IconProps
  extends IconBaseProps,
    Omit<SVGProps<SVGSVGElement>, 'color' | 'style' | 'strokeWidth'> {}

/**
 * Base SVG wrapper used by every generated icon component.
 * Handles size, color, accessibility, and forwards all native SVG props.
 */
export const Icon = forwardRef<SVGSVGElement, IconProps & { children: React.ReactNode }>(
  function Icon({ size = 'md', color = 'currentColor', className, label, strokeWidth = 2, children, ...rest }, ref) {
    const px = resolveSize(size)

    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={px}
        height={px}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
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
