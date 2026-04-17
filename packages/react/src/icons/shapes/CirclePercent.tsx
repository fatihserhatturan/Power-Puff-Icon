// This file is auto-generated. Do not edit manually.
// Source: svgs/shapes/circle-percent.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const CirclePercentMeta: IconMeta = {
  name: 'circle-percent',
  category: 'shapes',
  tags: [],
  version: '0.1.0',
}

export const CirclePercentIcon = forwardRef<SVGSVGElement, IconProps>(
  function CirclePercentIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <circle cx="12" cy="12" r="10" />
        <path d="m15 9-6 6" />
        <path d="M9 9h.01" />
        <path d="M15 15h.01" />
      </Icon>
    )
  },
)

CirclePercentIcon.displayName = 'CirclePercentIcon'
