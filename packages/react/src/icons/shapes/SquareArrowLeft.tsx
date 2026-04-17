// This file is auto-generated. Do not edit manually.
// Source: svgs/shapes/square-arrow-left.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const SquareArrowLeftMeta: IconMeta = {
  name: 'square-arrow-left',
  category: 'shapes',
  tags: [],
  version: '0.1.0',
}

export const SquareArrowLeftIcon = forwardRef<SVGSVGElement, IconProps>(
  function SquareArrowLeftIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="m12 8-4 4 4 4" />
        <path d="M16 12H8" />
      </Icon>
    )
  },
)

SquareArrowLeftIcon.displayName = 'SquareArrowLeftIcon'
