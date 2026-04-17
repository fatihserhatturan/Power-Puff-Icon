// This file is auto-generated. Do not edit manually.
// Source: svgs/chart/chart-bar-stacked.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const ChartBarStackedMeta: IconMeta = {
  name: 'chart-bar-stacked',
  category: 'chart',
  tags: [],
  version: '0.1.0',
}

export const ChartBarStackedIcon = forwardRef<SVGSVGElement, IconProps>(
  function ChartBarStackedIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="M11 13v4" />
        <path d="M15 5v4" />
        <path d="M3 3v16a2 2 0 0 0 2 2h16" />
        <rect x="7" y="13" width="9" height="4" rx="1" />
        <rect x="7" y="5" width="12" height="4" rx="1" />
      </Icon>
    )
  },
)

ChartBarStackedIcon.displayName = 'ChartBarStackedIcon'
