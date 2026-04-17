// This file is auto-generated. Do not edit manually.
// Source: svgs/shapes/square-percent.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const SquarePercentMeta: IconMeta = {
  name: 'square-percent',
  category: 'shapes',
  tags: [],
  version: '0.1.0',
}

export const SquarePercentIcon = forwardRef<SVGSVGElement, IconProps>(
  function SquarePercentIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="m15 9-6 6" />
        <path d="M9 9h.01" />
        <path d="M15 15h.01" />
      </Icon>
    )
  },
)

SquarePercentIcon.displayName = 'SquarePercentIcon'
