// This file is auto-generated. Do not edit manually.
// Source: svgs/ui/panel-right-close.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const PanelRightCloseMeta: IconMeta = {
  name: 'panel-right-close',
  category: 'ui',
  tags: [],
  version: '0.1.0',
}

export const PanelRightCloseIcon = forwardRef<SVGSVGElement, IconProps>(
  function PanelRightCloseIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M15 3v18" />
        <path d="m8 9 3 3-3 3" />
      </Icon>
    )
  },
)

PanelRightCloseIcon.displayName = 'PanelRightCloseIcon'
