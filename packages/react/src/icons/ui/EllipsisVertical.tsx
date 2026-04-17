// This file is auto-generated. Do not edit manually.
// Source: svgs/ui/ellipsis-vertical.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const EllipsisVerticalMeta: IconMeta = {
  name: 'ellipsis-vertical',
  category: 'ui',
  tags: [],
  version: '0.1.0',
}

export const EllipsisVerticalIcon = forwardRef<SVGSVGElement, IconProps>(
  function EllipsisVerticalIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <circle cx="12" cy="12" r="1" />
        <circle cx="12" cy="5" r="1" />
        <circle cx="12" cy="19" r="1" />
      </Icon>
    )
  },
)

EllipsisVerticalIcon.displayName = 'EllipsisVerticalIcon'
