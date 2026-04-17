// This file is auto-generated. Do not edit manually.
// Source: svgs/ui/panel-right-dashed.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const PanelRightDashedMeta: IconMeta = {
  name: 'panel-right-dashed',
  category: 'ui',
  tags: [],
  version: '0.1.0',
}

export const PanelRightDashedIcon = forwardRef<SVGSVGElement, IconProps>(
  function PanelRightDashedIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M15 14v1" />
        <path d="M15 19v2" />
        <path d="M15 3v2" />
        <path d="M15 9v1" />
      </Icon>
    )
  },
)

PanelRightDashedIcon.displayName = 'PanelRightDashedIcon'
