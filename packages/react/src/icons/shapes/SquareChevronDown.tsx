// This file is auto-generated. Do not edit manually.
// Source: svgs/shapes/square-chevron-down.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const SquareChevronDownMeta: IconMeta = {
  name: 'square-chevron-down',
  category: 'shapes',
  tags: [],
  version: '0.1.0',
}

export const SquareChevronDownIcon = forwardRef<SVGSVGElement, IconProps>(
  function SquareChevronDownIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="m16 10-4 4-4-4" />
      </Icon>
    )
  },
)

SquareChevronDownIcon.displayName = 'SquareChevronDownIcon'
