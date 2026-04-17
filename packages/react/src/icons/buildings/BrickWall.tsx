// This file is auto-generated. Do not edit manually.
// Source: svgs/buildings/brick-wall.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const BrickWallMeta: IconMeta = {
  name: 'brick-wall',
  category: 'buildings',
  tags: [],
  version: '0.1.0',
}

export const BrickWallIcon = forwardRef<SVGSVGElement, IconProps>(
  function BrickWallIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M12 9v6" />
        <path d="M16 15v6" />
        <path d="M16 3v6" />
        <path d="M3 15h18" />
        <path d="M3 9h18" />
        <path d="M8 15v6" />
        <path d="M8 3v6" />
      </Icon>
    )
  },
)

BrickWallIcon.displayName = 'BrickWallIcon'
