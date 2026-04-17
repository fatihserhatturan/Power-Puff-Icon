// This file is auto-generated. Do not edit manually.
// Source: svgs/ui/gallery-horizontal.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const GalleryHorizontalMeta: IconMeta = {
  name: 'gallery-horizontal',
  category: 'ui',
  tags: [],
  version: '0.1.0',
}

export const GalleryHorizontalIcon = forwardRef<SVGSVGElement, IconProps>(
  function GalleryHorizontalIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="M2 3v18" />
        <rect width="12" height="18" x="6" y="3" rx="2" />
        <path d="M22 3v18" />
      </Icon>
    )
  },
)

GalleryHorizontalIcon.displayName = 'GalleryHorizontalIcon'
