// This file is auto-generated. Do not edit manually.
// Source: svgs/ui/panel-top-close.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const PanelTopCloseMeta: IconMeta = {
  name: 'panel-top-close',
  category: 'ui',
  tags: [],
  version: '0.1.0',
}

export const PanelTopCloseIcon = forwardRef<SVGSVGElement, IconProps>(
  function PanelTopCloseIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M3 9h18" />
        <path d="m9 16 3-3 3 3" />
      </Icon>
    )
  },
)

PanelTopCloseIcon.displayName = 'PanelTopCloseIcon'
