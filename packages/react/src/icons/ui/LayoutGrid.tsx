// This file is auto-generated. Do not edit manually.
// Source: svgs/ui/layout-grid.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const LayoutGridMeta: IconMeta = {
  name: 'layout-grid',
  category: 'ui',
  tags: [],
  version: '0.1.0',
}

export const LayoutGridIcon = forwardRef<SVGSVGElement, IconProps>(
  function LayoutGridIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <rect width="7" height="7" x="3" y="3" rx="1" />
        <rect width="7" height="7" x="14" y="3" rx="1" />
        <rect width="7" height="7" x="14" y="14" rx="1" />
        <rect width="7" height="7" x="3" y="14" rx="1" />
      </Icon>
    )
  },
)

LayoutGridIcon.displayName = 'LayoutGridIcon'
