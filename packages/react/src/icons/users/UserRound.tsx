// This file is auto-generated. Do not edit manually.
// Source: svgs/users/user-round.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const UserRoundMeta: IconMeta = {
  name: 'user-round',
  category: 'users',
  tags: [],
  version: '0.1.0',
}

export const UserRoundIcon = forwardRef<SVGSVGElement, IconProps>(
  function UserRoundIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <circle cx="12" cy="8" r="5" />
        <path d="M20 21a8 8 0 0 0-16 0" />
      </Icon>
    )
  },
)

UserRoundIcon.displayName = 'UserRoundIcon'
