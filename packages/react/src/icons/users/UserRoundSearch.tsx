// This file is auto-generated. Do not edit manually.
// Source: svgs/users/user-round-search.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const UserRoundSearchMeta: IconMeta = {
  name: 'user-round-search',
  category: 'users',
  tags: [],
  version: '0.1.0',
}

export const UserRoundSearchIcon = forwardRef<SVGSVGElement, IconProps>(
  function UserRoundSearchIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <circle cx="10" cy="8" r="5" />
        <path d="M2 21a8 8 0 0 1 10.434-7.62" />
        <circle cx="18" cy="18" r="3" />
        <path d="m22 22-1.9-1.9" />
      </Icon>
    )
  },
)

UserRoundSearchIcon.displayName = 'UserRoundSearchIcon'
