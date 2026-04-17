// This file is auto-generated. Do not edit manually.
// Source: svgs/text/paint-roller.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const PaintRollerMeta: IconMeta = {
  name: 'paint-roller',
  category: 'text',
  tags: [],
  version: '0.1.0',
}

export const PaintRollerIcon = forwardRef<SVGSVGElement, IconProps>(
  function PaintRollerIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <rect width="16" height="6" x="2" y="2" rx="2" />
        <path d="M10 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
        <rect width="4" height="6" x="8" y="16" rx="1" />
      </Icon>
    )
  },
)

PaintRollerIcon.displayName = 'PaintRollerIcon'
