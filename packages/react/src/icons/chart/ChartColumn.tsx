// This file is auto-generated. Do not edit manually.
// Source: svgs/chart/chart-column.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const ChartColumnMeta: IconMeta = {
  name: 'chart-column',
  category: 'chart',
  tags: [],
  version: '0.1.0',
}

export const ChartColumnIcon = forwardRef<SVGSVGElement, IconProps>(
  function ChartColumnIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="M3 3v16a2 2 0 0 0 2 2h16" />
        <path d="M18 17V9" />
        <path d="M13 17V5" />
        <path d="M8 17v-3" />
      </Icon>
    )
  },
)

ChartColumnIcon.displayName = 'ChartColumnIcon'
