// This file is auto-generated. Do not edit manually.
// Source: svgs/weather/wind-arrow-down.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const WindArrowDownMeta: IconMeta = {
  name: 'wind-arrow-down',
  category: 'weather',
  tags: [],
  version: '0.1.0',
}

export const WindArrowDownIcon = forwardRef<SVGSVGElement, IconProps>(
  function WindArrowDownIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="M10 2v8" />
        <path d="M12.8 21.6A2 2 0 1 0 14 18H2" />
        <path d="M17.5 10a2.5 2.5 0 1 1 2 4H2" />
        <path d="m6 6 4 4 4-4" />
      </Icon>
    )
  },
)

WindArrowDownIcon.displayName = 'WindArrowDownIcon'
