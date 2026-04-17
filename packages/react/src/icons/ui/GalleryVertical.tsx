// This file is auto-generated. Do not edit manually.
// Source: svgs/ui/gallery-vertical.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const GalleryVerticalMeta: IconMeta = {
  name: 'gallery-vertical',
  category: 'ui',
  tags: [],
  version: '0.1.0',
}

export const GalleryVerticalIcon = forwardRef<SVGSVGElement, IconProps>(
  function GalleryVerticalIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="M3 2h18" />
        <rect width="18" height="12" x="3" y="6" rx="2" />
        <path d="M3 22h18" />
      </Icon>
    )
  },
)

GalleryVerticalIcon.displayName = 'GalleryVerticalIcon'
