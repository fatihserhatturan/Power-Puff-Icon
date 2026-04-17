// This file is auto-generated. Do not edit manually.
// Source: svgs/ui/fullscreen.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const FullscreenMeta: IconMeta = {
  name: 'fullscreen',
  category: 'ui',
  tags: [],
  version: '0.1.0',
}

export const FullscreenIcon = forwardRef<SVGSVGElement, IconProps>(
  function FullscreenIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="M3 7V5a2 2 0 0 1 2-2h2" />
        <path d="M17 3h2a2 2 0 0 1 2 2v2" />
        <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
        <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
        <rect width="10" height="8" x="7" y="8" rx="1" />
      </Icon>
    )
  },
)

FullscreenIcon.displayName = 'FullscreenIcon'
