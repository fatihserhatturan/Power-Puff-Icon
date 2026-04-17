// This file is auto-generated. Do not edit manually.
// Source: svgs/shapes/square-arrow-down-right.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const SquareArrowDownRightMeta: IconMeta = {
  name: 'square-arrow-down-right',
  category: 'shapes',
  tags: [],
  version: '0.1.0',
}

export const SquareArrowDownRightIcon = forwardRef<SVGSVGElement, IconProps>(
  function SquareArrowDownRightIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="m8 8 8 8" />
        <path d="M16 8v8H8" />
      </Icon>
    )
  },
)

SquareArrowDownRightIcon.displayName = 'SquareArrowDownRightIcon'
