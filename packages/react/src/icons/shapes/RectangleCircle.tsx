// This file is auto-generated. Do not edit manually.
// Source: svgs/shapes/rectangle-circle.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const RectangleCircleMeta: IconMeta = {
  name: 'rectangle-circle',
  category: 'shapes',
  tags: [],
  version: '0.1.0',
}

export const RectangleCircleIcon = forwardRef<SVGSVGElement, IconProps>(
  function RectangleCircleIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="M14 4v16H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z" />
        <circle cx="14" cy="12" r="8" />
      </Icon>
    )
  },
)

RectangleCircleIcon.displayName = 'RectangleCircleIcon'
