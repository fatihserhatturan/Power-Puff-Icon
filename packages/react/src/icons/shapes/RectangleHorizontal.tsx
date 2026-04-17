// This file is auto-generated. Do not edit manually.
// Source: svgs/shapes/rectangle-horizontal.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const RectangleHorizontalMeta: IconMeta = {
  name: 'rectangle-horizontal',
  category: 'shapes',
  tags: [],
  version: '0.1.0',
}

export const RectangleHorizontalIcon = forwardRef<SVGSVGElement, IconProps>(
  function RectangleHorizontalIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <rect width="20" height="12" x="2" y="6" rx="2" />
      </Icon>
    )
  },
)

RectangleHorizontalIcon.displayName = 'RectangleHorizontalIcon'
