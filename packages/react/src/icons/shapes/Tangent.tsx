// This file is auto-generated. Do not edit manually.
// Source: svgs/shapes/tangent.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const TangentMeta: IconMeta = {
  name: 'tangent',
  category: 'shapes',
  tags: [],
  version: '0.1.0',
}

export const TangentIcon = forwardRef<SVGSVGElement, IconProps>(function TangentIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <circle cx="17" cy="4" r="2" />
      <path d="M15.59 5.41 5.41 15.59" />
      <circle cx="4" cy="17" r="2" />
      <path d="M12 22s-4-9-1.5-11.5S22 12 22 12" />
    </Icon>
  )
})

TangentIcon.displayName = 'TangentIcon'
