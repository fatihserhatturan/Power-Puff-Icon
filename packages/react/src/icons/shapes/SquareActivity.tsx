// This file is auto-generated. Do not edit manually.
// Source: svgs/shapes/square-activity.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const SquareActivityMeta: IconMeta = {
  name: 'square-activity',
  category: 'shapes',
  tags: [],
  version: '0.1.0',
}

export const SquareActivityIcon = forwardRef<SVGSVGElement, IconProps>(
  function SquareActivityIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M17 12h-2l-2 5-2-10-2 5H7" />
      </Icon>
    )
  },
)

SquareActivityIcon.displayName = 'SquareActivityIcon'
