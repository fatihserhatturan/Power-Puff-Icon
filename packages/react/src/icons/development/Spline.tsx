// This file is auto-generated. Do not edit manually.
// Source: svgs/development/spline.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const SplineMeta: IconMeta = {
  name: 'spline',
  category: 'development',
  tags: [],
  version: '0.1.0',
}

export const SplineIcon = forwardRef<SVGSVGElement, IconProps>(function SplineIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <circle cx="19" cy="5" r="2" />
      <circle cx="5" cy="19" r="2" />
      <path d="M5 17A12 12 0 0 1 17 5" />
    </Icon>
  )
})

SplineIcon.displayName = 'SplineIcon'
