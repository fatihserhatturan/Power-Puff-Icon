// This file is auto-generated. Do not edit manually.
// Source: svgs/shapes/diameter.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const DiameterMeta: IconMeta = {
  name: 'diameter',
  category: 'shapes',
  tags: [],
  version: '0.1.0',
}

export const DiameterIcon = forwardRef<SVGSVGElement, IconProps>(function DiameterIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <circle cx="19" cy="19" r="2" />
      <circle cx="5" cy="5" r="2" />
      <path d="M6.48 3.66a10 10 0 0 1 13.86 13.86" />
      <path d="m6.41 6.41 11.18 11.18" />
      <path d="M3.66 6.48a10 10 0 0 0 13.86 13.86" />
    </Icon>
  )
})

DiameterIcon.displayName = 'DiameterIcon'
