// This file is auto-generated. Do not edit manually.
// Source: svgs/ui/grip-horizontal.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const GripHorizontalMeta: IconMeta = {
  name: 'grip-horizontal',
  category: 'ui',
  tags: [],
  version: '0.1.0',
}

export const GripHorizontalIcon = forwardRef<SVGSVGElement, IconProps>(
  function GripHorizontalIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <circle cx="12" cy="9" r="1" />
        <circle cx="19" cy="9" r="1" />
        <circle cx="5" cy="9" r="1" />
        <circle cx="12" cy="15" r="1" />
        <circle cx="19" cy="15" r="1" />
        <circle cx="5" cy="15" r="1" />
      </Icon>
    )
  },
)

GripHorizontalIcon.displayName = 'GripHorizontalIcon'
