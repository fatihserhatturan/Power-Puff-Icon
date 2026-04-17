// This file is auto-generated. Do not edit manually.
// Source: svgs/buildings/app-window.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const AppWindowMeta: IconMeta = {
  name: 'app-window',
  category: 'buildings',
  tags: [],
  version: '0.1.0',
}

export const AppWindowIcon = forwardRef<SVGSVGElement, IconProps>(
  function AppWindowIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M10 4v4" />
        <path d="M2 8h20" />
        <path d="M6 4v4" />
      </Icon>
    )
  },
)

AppWindowIcon.displayName = 'AppWindowIcon'
