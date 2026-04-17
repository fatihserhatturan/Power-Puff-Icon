// This file is auto-generated. Do not edit manually.
// Source: svgs/ui/wallpaper.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const WallpaperMeta: IconMeta = {
  name: 'wallpaper',
  category: 'ui',
  tags: [],
  version: '0.1.0',
}

export const WallpaperIcon = forwardRef<SVGSVGElement, IconProps>(
  function WallpaperIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="M12 17v4" />
        <path d="M8 21h8" />
        <path d="m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15" />
        <circle cx="8" cy="9" r="2" />
        <rect x="2" y="3" width="20" height="14" rx="2" />
      </Icon>
    )
  },
)

WallpaperIcon.displayName = 'WallpaperIcon'
