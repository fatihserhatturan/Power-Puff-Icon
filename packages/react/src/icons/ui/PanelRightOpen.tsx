// This file is auto-generated. Do not edit manually.
// Source: svgs/ui/panel-right-open.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const PanelRightOpenMeta: IconMeta = {
  name: 'panel-right-open',
  category: 'ui',
  tags: [],
  version: '0.1.0',
}

export const PanelRightOpenIcon = forwardRef<SVGSVGElement, IconProps>(
  function PanelRightOpenIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M15 3v18" />
        <path d="m10 15-3-3 3-3" />
      </Icon>
    )
  },
)

PanelRightOpenIcon.displayName = 'PanelRightOpenIcon'
