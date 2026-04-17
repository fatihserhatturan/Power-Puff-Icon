// This file is auto-generated. Do not edit manually.
// Source: svgs/shapes/ellipse.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const EllipseMeta: IconMeta = {
  name: 'ellipse',
  category: 'shapes',
  tags: [],
  version: '0.1.0',
}

export const EllipseIcon = forwardRef<SVGSVGElement, IconProps>(function EllipseIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <ellipse cx="12" cy="12" rx="10" ry="6" />
    </Icon>
  )
})

EllipseIcon.displayName = 'EllipseIcon'
