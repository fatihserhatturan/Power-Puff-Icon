// This file is auto-generated. Do not edit manually.
// Source: svgs/media/videotape.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const VideotapeMeta: IconMeta = {
  name: 'videotape',
  category: 'media',
  tags: [],
  version: '0.1.0',
}

export const VideotapeIcon = forwardRef<SVGSVGElement, IconProps>(
  function VideotapeIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="M2 8h20" />
        <circle cx="8" cy="14" r="2" />
        <path d="M8 12h8" />
        <circle cx="16" cy="14" r="2" />
      </Icon>
    )
  },
)

VideotapeIcon.displayName = 'VideotapeIcon'
