// This file is auto-generated. Do not edit manually.
// Source: svgs/ui/ellipsis.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const EllipsisMeta: IconMeta = {
  name: 'ellipsis',
  category: 'ui',
  tags: [],
  version: '0.1.0',
}

export const EllipsisIcon = forwardRef<SVGSVGElement, IconProps>(function EllipsisIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <circle cx="12" cy="12" r="1" />
      <circle cx="19" cy="12" r="1" />
      <circle cx="5" cy="12" r="1" />
    </Icon>
  )
})

EllipsisIcon.displayName = 'EllipsisIcon'
