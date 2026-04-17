// This file is auto-generated. Do not edit manually.
// Source: svgs/users/users-round.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const UsersRoundMeta: IconMeta = {
  name: 'users-round',
  category: 'users',
  tags: [],
  version: '0.1.0',
}

export const UsersRoundIcon = forwardRef<SVGSVGElement, IconProps>(
  function UsersRoundIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="M18 21a8 8 0 0 0-16 0" />
        <circle cx="10" cy="8" r="5" />
        <path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3" />
      </Icon>
    )
  },
)

UsersRoundIcon.displayName = 'UsersRoundIcon'
