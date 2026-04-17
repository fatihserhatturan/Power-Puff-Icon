// This file is auto-generated. Do not edit manually.
// Source: svgs/buildings/house.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const HouseMeta: IconMeta = {
  name: 'house',
  category: 'buildings',
  tags: [],
  version: '0.1.0',
}

export const HouseIcon = forwardRef<SVGSVGElement, IconProps>(function HouseIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
      <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    </Icon>
  )
})

HouseIcon.displayName = 'HouseIcon'
