// This file is auto-generated. Do not edit manually.
// Source: svgs/shapes/circle-minus.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const CircleMinusMeta: IconMeta = {
  name: 'circle-minus',
  category: 'shapes',
  tags: [],
  version: '0.1.0',
}

export const CircleMinusIcon = forwardRef<SVGSVGElement, IconProps>(
  function CircleMinusIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12h8" />
      </Icon>
    )
  },
)

CircleMinusIcon.displayName = 'CircleMinusIcon'
