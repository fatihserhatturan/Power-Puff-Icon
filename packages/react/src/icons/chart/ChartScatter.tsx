// This file is auto-generated. Do not edit manually.
// Source: svgs/chart/chart-scatter.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const ChartScatterMeta: IconMeta = {
  name: 'chart-scatter',
  category: 'chart',
  tags: [],
  version: '0.1.0',
}

export const ChartScatterIcon = forwardRef<SVGSVGElement, IconProps>(
  function ChartScatterIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
        <circle cx="18.5" cy="5.5" r=".5" fill="currentColor" />
        <circle cx="11.5" cy="11.5" r=".5" fill="currentColor" />
        <circle cx="7.5" cy="16.5" r=".5" fill="currentColor" />
        <circle cx="17.5" cy="14.5" r=".5" fill="currentColor" />
        <path d="M3 3v16a2 2 0 0 0 2 2h16" />
      </Icon>
    )
  },
)

ChartScatterIcon.displayName = 'ChartScatterIcon'
