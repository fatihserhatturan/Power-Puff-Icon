// This file is auto-generated. Do not edit manually.
// Source: svgs/shapes/circle-power.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const CirclePowerMeta: IconMeta = {
  name: 'circle-power',
  category: 'shapes',
  tags: [],
  version: '0.1.0',
}

export const CirclePowerIcon = forwardRef<SVGSVGElement, IconProps>(
  function CirclePowerIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 7v4" />
        <path d="M7.998 9.003a5 5 0 1 0 8-.005" />
      </Icon>
    )
  },
)

CirclePowerIcon.displayName = 'CirclePowerIcon'
