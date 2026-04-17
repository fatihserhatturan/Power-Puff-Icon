// This file is auto-generated. Do not edit manually.
// Source: svgs/shapes/square-arrow-up-left.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const SquareArrowUpLeftMeta: IconMeta = {
  name: 'square-arrow-up-left',
  category: 'shapes',
  tags: [],
  version: '0.1.0',
}

export const SquareArrowUpLeftIcon = forwardRef<SVGSVGElement, IconProps>(
  function SquareArrowUpLeftIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M8 16V8h8" />
        <path d="M16 16 8 8" />
      </Icon>
    )
  },
)

SquareArrowUpLeftIcon.displayName = 'SquareArrowUpLeftIcon'
