// This file is auto-generated. Do not edit manually.
// Source: svgs/social/orbit.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const OrbitMeta: IconMeta = {
  name: 'orbit',
  category: 'social',
  tags: [],
  version: '0.1.0',
}

export const OrbitIcon = forwardRef<SVGSVGElement, IconProps>(function OrbitIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <path d="M20.341 6.484A10 10 0 0 1 10.266 21.85" />
      <path d="M3.659 17.516A10 10 0 0 1 13.74 2.152" />
      <circle cx="12" cy="12" r="3" />
      <circle cx="19" cy="5" r="2" />
      <circle cx="5" cy="19" r="2" />
    </Icon>
  )
})

OrbitIcon.displayName = 'OrbitIcon'
