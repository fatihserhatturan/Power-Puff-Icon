// This file is auto-generated. Do not edit manually.
// Source: svgs/media/turntable.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const TurntableMeta: IconMeta = {
  name: 'turntable',
  category: 'media',
  tags: [],
  version: '0.1.0',
}

export const TurntableIcon = forwardRef<SVGSVGElement, IconProps>(
  function TurntableIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="M10 12.01h.01" />
        <path d="M18 8v4a8 8 0 0 1-1.07 4" />
        <circle cx="10" cy="12" r="4" />
        <rect x="2" y="4" width="20" height="16" rx="2" />
      </Icon>
    )
  },
)

TurntableIcon.displayName = 'TurntableIcon'
