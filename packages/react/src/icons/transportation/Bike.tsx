// This file is auto-generated. Do not edit manually.
// Source: svgs/transportation/bike.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const BikeMeta: IconMeta = {
  name: 'bike',
  category: 'transportation',
  tags: [],
  version: '0.1.0',
}

export const BikeIcon = forwardRef<SVGSVGElement, IconProps>(function BikeIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <circle cx="18.5" cy="17.5" r="3.5" />
      <circle cx="5.5" cy="17.5" r="3.5" />
      <circle cx="15" cy="5" r="1" />
      <path d="M12 17.5V14l-3-3 4-3 2 3h2" />
    </Icon>
  )
})

BikeIcon.displayName = 'BikeIcon'
