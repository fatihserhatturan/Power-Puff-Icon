// This file is auto-generated. Do not edit manually.
// Source: svgs/shapes/square-divide.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const SquareDivideMeta: IconMeta = {
  name: 'square-divide',
  category: 'shapes',
  tags: [],
  version: '0.1.0',
}

export const SquareDivideIcon = forwardRef<SVGSVGElement, IconProps>(
  function SquareDivideIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
        <line x1="8" x2="16" y1="12" y2="12" />
        <line x1="12" x2="12" y1="16" y2="16" />
        <line x1="12" x2="12" y1="8" y2="8" />
      </Icon>
    )
  },
)

SquareDivideIcon.displayName = 'SquareDivideIcon'
