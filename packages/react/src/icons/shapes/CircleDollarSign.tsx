// This file is auto-generated. Do not edit manually.
// Source: svgs/shapes/circle-dollar-sign.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const CircleDollarSignMeta: IconMeta = {
  name: 'circle-dollar-sign',
  category: 'shapes',
  tags: [],
  version: '0.1.0',
}

export const CircleDollarSignIcon = forwardRef<SVGSVGElement, IconProps>(
  function CircleDollarSignIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <circle cx="12" cy="12" r="10" />
        <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
        <path d="M12 18V6" />
      </Icon>
    )
  },
)

CircleDollarSignIcon.displayName = 'CircleDollarSignIcon'
