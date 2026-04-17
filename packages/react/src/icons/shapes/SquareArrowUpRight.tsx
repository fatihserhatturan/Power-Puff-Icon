// This file is auto-generated. Do not edit manually.
// Source: svgs/shapes/square-arrow-up-right.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const SquareArrowUpRightMeta: IconMeta = {
  name: 'square-arrow-up-right',
  category: 'shapes',
  tags: [],
  version: '0.1.0',
}

export const SquareArrowUpRightIcon = forwardRef<SVGSVGElement, IconProps>(
  function SquareArrowUpRightIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M8 8h8v8" />
        <path d="m8 16 8-8" />
      </Icon>
    )
  },
)

SquareArrowUpRightIcon.displayName = 'SquareArrowUpRightIcon'
