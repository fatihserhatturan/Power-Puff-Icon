// This file is auto-generated. Do not edit manually.
// Source: svgs/ui/panel-bottom-open.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const PanelBottomOpenMeta: IconMeta = {
  name: 'panel-bottom-open',
  category: 'ui',
  tags: [],
  version: '0.1.0',
}

export const PanelBottomOpenIcon = forwardRef<SVGSVGElement, IconProps>(
  function PanelBottomOpenIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M3 15h18" />
        <path d="m9 10 3-3 3 3" />
      </Icon>
    )
  },
)

PanelBottomOpenIcon.displayName = 'PanelBottomOpenIcon'
