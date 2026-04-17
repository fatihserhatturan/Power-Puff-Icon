// This file is auto-generated. Do not edit manually.
// Source: svgs/buildings/door-closed-locked.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const DoorClosedLockedMeta: IconMeta = {
  name: 'door-closed-locked',
  category: 'buildings',
  tags: [],
  version: '0.1.0',
}

export const DoorClosedLockedIcon = forwardRef<SVGSVGElement, IconProps>(
  function DoorClosedLockedIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="M10 12h.01" />
        <path d="M18 9V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14" />
        <path d="M2 20h8" />
        <path d="M20 17v-2a2 2 0 1 0-4 0v2" />
        <rect x="14" y="17" width="8" height="5" rx="1" />
      </Icon>
    )
  },
)

DoorClosedLockedIcon.displayName = 'DoorClosedLockedIcon'
