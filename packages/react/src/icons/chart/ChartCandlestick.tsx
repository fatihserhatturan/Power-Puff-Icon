// This file is auto-generated. Do not edit manually.
// Source: svgs/chart/chart-candlestick.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const ChartCandlestickMeta: IconMeta = {
  name: 'chart-candlestick',
  category: 'chart',
  tags: [],
  version: '0.1.0',
}

export const ChartCandlestickIcon = forwardRef<SVGSVGElement, IconProps>(
  function ChartCandlestickIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="M9 5v4" />
        <rect width="4" height="6" x="7" y="9" rx="1" />
        <path d="M9 15v2" />
        <path d="M17 3v2" />
        <rect width="4" height="8" x="15" y="5" rx="1" />
        <path d="M17 13v3" />
        <path d="M3 3v16a2 2 0 0 0 2 2h16" />
      </Icon>
    )
  },
)

ChartCandlestickIcon.displayName = 'ChartCandlestickIcon'
