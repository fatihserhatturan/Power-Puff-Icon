// This file is auto-generated. Do not edit manually.
// Source: svgs/ui/grip-vertical.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const GripVerticalMeta: IconMeta = {
  name: 'grip-vertical',
  category: 'ui',
  tags: [],
  version: '0.1.0',
}

export const GripVerticalIcon = forwardRef<SVGSVGElement, IconProps>(
  function GripVerticalIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <circle cx="9" cy="12" r="1" />
        <circle cx="9" cy="5" r="1" />
        <circle cx="9" cy="19" r="1" />
        <circle cx="15" cy="12" r="1" />
        <circle cx="15" cy="5" r="1" />
        <circle cx="15" cy="19" r="1" />
      </Icon>
    )
  },
)

GripVerticalIcon.displayName = 'GripVerticalIcon'
