// This file is auto-generated. Do not edit manually.
// Source: svgs/users/user-round-check.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const UserRoundCheckMeta: IconMeta = {
  name: 'user-round-check',
  category: 'users',
  tags: [],
  version: '0.1.0',
}

export const UserRoundCheckIcon = forwardRef<SVGSVGElement, IconProps>(
  function UserRoundCheckIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="M2 21a8 8 0 0 1 13.292-6" />
        <circle cx="10" cy="8" r="5" />
        <path d="m16 19 2 2 4-4" />
      </Icon>
    )
  },
)

UserRoundCheckIcon.displayName = 'UserRoundCheckIcon'
