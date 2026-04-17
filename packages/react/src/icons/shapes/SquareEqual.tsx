// This file is auto-generated. Do not edit manually.
// Source: svgs/shapes/square-equal.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const SquareEqualMeta: IconMeta = {
  name: 'square-equal',
  category: 'shapes',
  tags: [],
  version: '0.1.0',
}

export const SquareEqualIcon = forwardRef<SVGSVGElement, IconProps>(
  function SquareEqualIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M7 10h10" />
        <path d="M7 14h10" />
      </Icon>
    )
  },
)

SquareEqualIcon.displayName = 'SquareEqualIcon'
