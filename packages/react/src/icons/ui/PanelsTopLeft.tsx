// This file is auto-generated. Do not edit manually.
// Source: svgs/ui/panels-top-left.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const PanelsTopLeftMeta: IconMeta = {
  name: 'panels-top-left',
  category: 'ui',
  tags: [],
  version: '0.1.0',
}

export const PanelsTopLeftIcon = forwardRef<SVGSVGElement, IconProps>(
  function PanelsTopLeftIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </Icon>
    )
  },
)

PanelsTopLeftIcon.displayName = 'PanelsTopLeftIcon'
