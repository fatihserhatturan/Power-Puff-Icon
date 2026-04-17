// This file is auto-generated. Do not edit manually.
// Source: svgs/shapes/rectangle-ellipsis.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const RectangleEllipsisMeta: IconMeta = {
  name: 'rectangle-ellipsis',
  category: 'shapes',
  tags: [],
  version: '0.1.0',
}

export const RectangleEllipsisIcon = forwardRef<SVGSVGElement, IconProps>(
  function RectangleEllipsisIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <rect width="20" height="12" x="2" y="6" rx="2" />
        <path d="M12 12h.01" />
        <path d="M17 12h.01" />
        <path d="M7 12h.01" />
      </Icon>
    )
  },
)

RectangleEllipsisIcon.displayName = 'RectangleEllipsisIcon'
