// This file is auto-generated. Do not edit manually.
// Source: svgs/weather/moon-star.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const MoonStarMeta: IconMeta = {
  name: 'moon-star',
  category: 'weather',
  tags: [],
  version: '0.1.0',
}

export const MoonStarIcon = forwardRef<SVGSVGElement, IconProps>(function MoonStarIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <path d="M18 5h4" />
      <path d="M20 3v4" />
      <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" />
    </Icon>
  )
})

MoonStarIcon.displayName = 'MoonStarIcon'
