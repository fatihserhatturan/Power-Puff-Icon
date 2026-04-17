// This file is auto-generated. Do not edit manually.
// Source: svgs/ui/panels-right-bottom.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const PanelsRightBottomMeta: IconMeta = {
  name: 'panels-right-bottom',
  category: 'ui',
  tags: [],
  version: '0.1.0',
}

export const PanelsRightBottomIcon = forwardRef<SVGSVGElement, IconProps>(
  function PanelsRightBottomIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M3 15h12" />
        <path d="M15 3v18" />
      </Icon>
    )
  },
)

PanelsRightBottomIcon.displayName = 'PanelsRightBottomIcon'
