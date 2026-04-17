// This file is auto-generated. Do not edit manually.
// Source: svgs/shapes/square-user-round.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const SquareUserRoundMeta: IconMeta = {
  name: 'square-user-round',
  category: 'shapes',
  tags: [],
  version: '0.1.0',
}

export const SquareUserRoundIcon = forwardRef<SVGSVGElement, IconProps>(
  function SquareUserRoundIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="M18 21a6 6 0 0 0-12 0" />
        <circle cx="12" cy="11" r="4" />
        <rect width="18" height="18" x="3" y="3" rx="2" />
      </Icon>
    )
  },
)

SquareUserRoundIcon.displayName = 'SquareUserRoundIcon'
