// This file is auto-generated. Do not edit manually.
// Source: svgs/ui/panel-top-dashed.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const PanelTopDashedMeta: IconMeta = {
  name: 'panel-top-dashed',
  category: 'ui',
  tags: [],
  version: '0.1.0',
}

export const PanelTopDashedIcon = forwardRef<SVGSVGElement, IconProps>(
  function PanelTopDashedIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M14 9h1" />
        <path d="M19 9h2" />
        <path d="M3 9h2" />
        <path d="M9 9h1" />
      </Icon>
    )
  },
)

PanelTopDashedIcon.displayName = 'PanelTopDashedIcon'
