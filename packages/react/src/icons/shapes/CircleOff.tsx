// This file is auto-generated. Do not edit manually.
// Source: svgs/shapes/circle-off.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const CircleOffMeta: IconMeta = {
  name: 'circle-off',
  category: 'shapes',
  tags: [],
  version: '0.1.0',
}

export const CircleOffIcon = forwardRef<SVGSVGElement, IconProps>(
  function CircleOffIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="m2 2 20 20" />
        <path d="M8.35 2.69A10 10 0 0 1 21.3 15.65" />
        <path d="M19.08 19.08A10 10 0 1 1 4.92 4.92" />
      </Icon>
    )
  },
)

CircleOffIcon.displayName = 'CircleOffIcon'
