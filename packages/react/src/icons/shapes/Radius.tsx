// This file is auto-generated. Do not edit manually.
// Source: svgs/shapes/radius.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const RadiusMeta: IconMeta = {
  name: 'radius',
  category: 'shapes',
  tags: [],
  version: '0.1.0',
}

export const RadiusIcon = forwardRef<SVGSVGElement, IconProps>(function RadiusIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <path d="M20.34 17.52a10 10 0 1 0-2.82 2.82" />
      <circle cx="19" cy="19" r="2" />
      <path d="m13.41 13.41 4.18 4.18" />
      <circle cx="12" cy="12" r="2" />
    </Icon>
  )
})

RadiusIcon.displayName = 'RadiusIcon'
