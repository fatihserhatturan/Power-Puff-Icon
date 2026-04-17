// This file is auto-generated. Do not edit manually.
// Source: svgs/shapes/circle-equal.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const CircleEqualMeta: IconMeta = {
  name: 'circle-equal',
  category: 'shapes',
  tags: [],
  version: '0.1.0',
}

export const CircleEqualIcon = forwardRef<SVGSVGElement, IconProps>(
  function CircleEqualIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <circle cx="12" cy="12" r="10" />
        <path d="M7 10h10" />
        <path d="M7 14h10" />
      </Icon>
    )
  },
)

CircleEqualIcon.displayName = 'CircleEqualIcon'
