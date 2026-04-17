// This file is auto-generated. Do not edit manually.
// Source: svgs/devices/mirror-rectangular.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const MirrorRectangularMeta: IconMeta = {
  name: 'mirror-rectangular',
  category: 'devices',
  tags: [],
  version: '0.1.0',
}

export const MirrorRectangularIcon = forwardRef<SVGSVGElement, IconProps>(
  function MirrorRectangularIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="M11 6 8 9" />
        <path d="m16 7-8 8" />
        <rect x="4" y="2" width="16" height="20" rx="2" />
      </Icon>
    )
  },
)

MirrorRectangularIcon.displayName = 'MirrorRectangularIcon'
