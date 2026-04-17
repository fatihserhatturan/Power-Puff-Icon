// This file is auto-generated. Do not edit manually.
// Source: svgs/security/lock-keyhole.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const LockKeyholeMeta: IconMeta = {
  name: 'lock-keyhole',
  category: 'security',
  tags: [],
  version: '0.1.0',
}

export const LockKeyholeIcon = forwardRef<SVGSVGElement, IconProps>(
  function LockKeyholeIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <circle cx="12" cy="16" r="1" />
        <rect x="3" y="10" width="18" height="12" rx="2" />
        <path d="M7 10V7a5 5 0 0 1 10 0v3" />
      </Icon>
    )
  },
)

LockKeyholeIcon.displayName = 'LockKeyholeIcon'
