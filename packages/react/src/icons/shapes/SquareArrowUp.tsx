// This file is auto-generated. Do not edit manually.
// Source: svgs/shapes/square-arrow-up.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const SquareArrowUpMeta: IconMeta = {
  name: 'square-arrow-up',
  category: 'shapes',
  tags: [],
  version: '0.1.0',
}

export const SquareArrowUpIcon = forwardRef<SVGSVGElement, IconProps>(
  function SquareArrowUpIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="m16 12-4-4-4 4" />
        <path d="M12 16V8" />
      </Icon>
    )
  },
)

SquareArrowUpIcon.displayName = 'SquareArrowUpIcon'
