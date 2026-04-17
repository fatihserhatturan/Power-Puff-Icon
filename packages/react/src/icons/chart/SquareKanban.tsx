// This file is auto-generated. Do not edit manually.
// Source: svgs/chart/square-kanban.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const SquareKanbanMeta: IconMeta = {
  name: 'square-kanban',
  category: 'chart',
  tags: [],
  version: '0.1.0',
}

export const SquareKanbanIcon = forwardRef<SVGSVGElement, IconProps>(
  function SquareKanbanIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M8 7v7" />
        <path d="M12 7v4" />
        <path d="M16 7v9" />
      </Icon>
    )
  },
)

SquareKanbanIcon.displayName = 'SquareKanbanIcon'
