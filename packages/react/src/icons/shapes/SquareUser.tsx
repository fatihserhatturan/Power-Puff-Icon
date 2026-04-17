// This file is auto-generated. Do not edit manually.
// Source: svgs/shapes/square-user.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const SquareUserMeta: IconMeta = {
  name: 'square-user',
  category: 'shapes',
  tags: [],
  version: '0.1.0',
}

export const SquareUserIcon = forwardRef<SVGSVGElement, IconProps>(
  function SquareUserIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <circle cx="12" cy="10" r="3" />
        <path d="M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
      </Icon>
    )
  },
)

SquareUserIcon.displayName = 'SquareUserIcon'
