// This file is auto-generated. Do not edit manually.
// Source: svgs/weather/rainbow.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const RainbowMeta: IconMeta = {
  name: 'rainbow',
  category: 'weather',
  tags: [],
  version: '0.1.0',
}

export const RainbowIcon = forwardRef<SVGSVGElement, IconProps>(function RainbowIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <path d="M22 17a10 10 0 0 0-20 0" />
      <path d="M6 17a6 6 0 0 1 12 0" />
      <path d="M10 17a2 2 0 0 1 4 0" />
    </Icon>
  )
})

RainbowIcon.displayName = 'RainbowIcon'
