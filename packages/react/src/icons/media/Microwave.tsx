// This file is auto-generated. Do not edit manually.
// Source: svgs/media/microwave.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const MicrowaveMeta: IconMeta = {
  name: 'microwave',
  category: 'media',
  tags: [],
  version: '0.1.0',
}

export const MicrowaveIcon = forwardRef<SVGSVGElement, IconProps>(
  function MicrowaveIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <rect width="20" height="15" x="2" y="4" rx="2" />
        <rect width="8" height="7" x="6" y="8" rx="1" />
        <path d="M18 8v7" />
        <path d="M6 19v2" />
        <path d="M18 19v2" />
      </Icon>
    )
  },
)

MicrowaveIcon.displayName = 'MicrowaveIcon'
