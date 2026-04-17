// This file is auto-generated. Do not edit manually.
// Source: svgs/ui/panel-left-dashed.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const PanelLeftDashedMeta: IconMeta = {
  name: 'panel-left-dashed',
  category: 'ui',
  tags: [],
  version: '0.1.0',
}

export const PanelLeftDashedIcon = forwardRef<SVGSVGElement, IconProps>(
  function PanelLeftDashedIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M9 14v1" />
        <path d="M9 19v2" />
        <path d="M9 3v2" />
        <path d="M9 9v1" />
      </Icon>
    )
  },
)

PanelLeftDashedIcon.displayName = 'PanelLeftDashedIcon'
