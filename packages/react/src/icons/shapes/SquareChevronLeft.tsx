// This file is auto-generated. Do not edit manually.
// Source: svgs/shapes/square-chevron-left.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const SquareChevronLeftMeta: IconMeta = {
  name: 'square-chevron-left',
  category: 'shapes',
  tags: [],
  version: '0.1.0',
}

export const SquareChevronLeftIcon = forwardRef<SVGSVGElement, IconProps>(
  function SquareChevronLeftIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="m14 16-4-4 4-4" />
      </Icon>
    )
  },
)

SquareChevronLeftIcon.displayName = 'SquareChevronLeftIcon'
