// This file is auto-generated. Do not edit manually.
// Source: svgs/ui/panel-bottom-close.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const PanelBottomCloseMeta: IconMeta = {
  name: 'panel-bottom-close',
  category: 'ui',
  tags: [],
  version: '0.1.0',
}

export const PanelBottomCloseIcon = forwardRef<SVGSVGElement, IconProps>(
  function PanelBottomCloseIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M3 15h18" />
        <path d="m15 8-3 3-3-3" />
      </Icon>
    )
  },
)

PanelBottomCloseIcon.displayName = 'PanelBottomCloseIcon'
