// This file is auto-generated. Do not edit manually.
// Source: svgs/users/user-round-x.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const UserRoundXMeta: IconMeta = {
  name: 'user-round-x',
  category: 'users',
  tags: [],
  version: '0.1.0',
}

export const UserRoundXIcon = forwardRef<SVGSVGElement, IconProps>(
  function UserRoundXIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="M2 21a8 8 0 0 1 11.873-7" />
        <circle cx="10" cy="8" r="5" />
        <path d="m17 17 5 5" />
        <path d="m22 17-5 5" />
      </Icon>
    )
  },
)

UserRoundXIcon.displayName = 'UserRoundXIcon'
