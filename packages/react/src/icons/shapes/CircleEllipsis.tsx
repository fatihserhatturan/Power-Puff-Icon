// This file is auto-generated. Do not edit manually.
// Source: svgs/shapes/circle-ellipsis.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const CircleEllipsisMeta: IconMeta = {
  name: 'circle-ellipsis',
  category: 'shapes',
  tags: [],
  version: '0.1.0',
}

export const CircleEllipsisIcon = forwardRef<SVGSVGElement, IconProps>(
  function CircleEllipsisIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <circle cx="12" cy="12" r="10" />
        <path d="M17 12h.01" />
        <path d="M12 12h.01" />
        <path d="M7 12h.01" />
      </Icon>
    )
  },
)

CircleEllipsisIcon.displayName = 'CircleEllipsisIcon'
