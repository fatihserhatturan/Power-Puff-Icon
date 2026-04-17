// This file is auto-generated. Do not edit manually.
// Source: svgs/users/user-lock.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const UserLockMeta: IconMeta = {
  name: 'user-lock',
  category: 'users',
  tags: [],
  version: '0.1.0',
}

export const UserLockIcon = forwardRef<SVGSVGElement, IconProps>(function UserLockIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <path d="M19 16v-2a2 2 0 0 0-4 0v2" />
      <path d="M9.5 15H7a4 4 0 0 0-4 4v2" />
      <circle cx="10" cy="7" r="4" />
      <rect x="13" y="16" width="8" height="5" rx=".899" />
    </Icon>
  )
})

UserLockIcon.displayName = 'UserLockIcon'
