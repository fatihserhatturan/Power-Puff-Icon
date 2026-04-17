// This file is auto-generated. Do not edit manually.
// Source: svgs/buildings/door-closed.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const DoorClosedMeta: IconMeta = {
  name: 'door-closed',
  category: 'buildings',
  tags: [],
  version: '0.1.0',
}

export const DoorClosedIcon = forwardRef<SVGSVGElement, IconProps>(
  function DoorClosedIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="M10 12h.01" />
        <path d="M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14" />
        <path d="M2 20h20" />
      </Icon>
    )
  },
)

DoorClosedIcon.displayName = 'DoorClosedIcon'
