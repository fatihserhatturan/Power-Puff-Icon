// This file is auto-generated. Do not edit manually.
// Source: svgs/shapes/square-arrow-down.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const SquareArrowDownMeta: IconMeta = {
  name: 'square-arrow-down',
  category: 'shapes',
  tags: [],
  version: '0.1.0',
}

export const SquareArrowDownIcon = forwardRef<SVGSVGElement, IconProps>(
  function SquareArrowDownIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M12 8v8" />
        <path d="m8 12 4 4 4-4" />
      </Icon>
    )
  },
)

SquareArrowDownIcon.displayName = 'SquareArrowDownIcon'
