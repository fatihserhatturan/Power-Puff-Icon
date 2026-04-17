// This file is auto-generated. Do not edit manually.
// Source: svgs/shapes/circle-pound-sterling.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const CirclePoundSterlingMeta: IconMeta = {
  name: 'circle-pound-sterling',
  category: 'shapes',
  tags: [],
  version: '0.1.0',
}

export const CirclePoundSterlingIcon = forwardRef<SVGSVGElement, IconProps>(
  function CirclePoundSterlingIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <circle cx="12" cy="12" r="10" />
        <path d="M10 16V9.5a1 1 0 0 1 5 0" />
        <path d="M8 12h4" />
        <path d="M8 16h7" />
      </Icon>
    )
  },
)

CirclePoundSterlingIcon.displayName = 'CirclePoundSterlingIcon'
