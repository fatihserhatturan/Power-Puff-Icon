// This file is auto-generated. Do not edit manually.
// Source: svgs/shapes/square-arrow-down-left.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const SquareArrowDownLeftMeta: IconMeta = {
  name: 'square-arrow-down-left',
  category: 'shapes',
  tags: [],
  version: '0.1.0',
}

export const SquareArrowDownLeftIcon = forwardRef<SVGSVGElement, IconProps>(
  function SquareArrowDownLeftIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="m16 8-8 8" />
        <path d="M16 16H8V8" />
      </Icon>
    )
  },
)

SquareArrowDownLeftIcon.displayName = 'SquareArrowDownLeftIcon'
