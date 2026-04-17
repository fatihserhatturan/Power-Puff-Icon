// This file is auto-generated. Do not edit manually.
// Source: svgs/ui/panel-left-close.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const PanelLeftCloseMeta: IconMeta = {
  name: 'panel-left-close',
  category: 'ui',
  tags: [],
  version: '0.1.0',
}

export const PanelLeftCloseIcon = forwardRef<SVGSVGElement, IconProps>(
  function PanelLeftCloseIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M9 3v18" />
        <path d="m16 15-3-3 3-3" />
      </Icon>
    )
  },
)

PanelLeftCloseIcon.displayName = 'PanelLeftCloseIcon'
