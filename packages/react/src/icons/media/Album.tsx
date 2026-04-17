// This file is auto-generated. Do not edit manually.
// Source: svgs/media/album.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const AlbumMeta: IconMeta = {
  name: 'album',
  category: 'media',
  tags: [],
  version: '0.1.0',
}

export const AlbumIcon = forwardRef<SVGSVGElement, IconProps>(function AlbumIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <polyline points="11 3 11 11 14 8 17 11 17 3" />
    </Icon>
  )
})

AlbumIcon.displayName = 'AlbumIcon'
