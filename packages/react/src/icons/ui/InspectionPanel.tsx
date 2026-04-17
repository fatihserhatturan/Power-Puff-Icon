// This file is auto-generated. Do not edit manually.
// Source: svgs/ui/inspection-panel.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const InspectionPanelMeta: IconMeta = {
  name: 'inspection-panel',
  category: 'ui',
  tags: [],
  version: '0.1.0',
}

export const InspectionPanelIcon = forwardRef<SVGSVGElement, IconProps>(
  function InspectionPanelIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M7 7h.01" />
        <path d="M17 7h.01" />
        <path d="M7 17h.01" />
        <path d="M17 17h.01" />
      </Icon>
    )
  },
)

InspectionPanelIcon.displayName = 'InspectionPanelIcon'
