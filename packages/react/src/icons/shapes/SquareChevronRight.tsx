// This file is auto-generated. Do not edit manually.
// Source: svgs/shapes/square-chevron-right.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const SquareChevronRightMeta: IconMeta = {
  name: 'square-chevron-right',
  category: 'shapes',
  tags: [],
  version: '0.1.0',
}

export const SquareChevronRightIcon = forwardRef<SVGSVGElement, IconProps>(
  function SquareChevronRightIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="m10 8 4 4-4 4" />
      </Icon>
    )
  },
)

SquareChevronRightIcon.displayName = 'SquareChevronRightIcon'
