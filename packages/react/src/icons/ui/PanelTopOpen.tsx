// This file is auto-generated. Do not edit manually.
// Source: svgs/ui/panel-top-open.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const PanelTopOpenMeta: IconMeta = {
  name: 'panel-top-open',
  category: 'ui',
  tags: [],
  version: '0.1.0',
}

export const PanelTopOpenIcon = forwardRef<SVGSVGElement, IconProps>(
  function PanelTopOpenIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M3 9h18" />
        <path d="m15 14-3 3-3-3" />
      </Icon>
    )
  },
)

PanelTopOpenIcon.displayName = 'PanelTopOpenIcon'
