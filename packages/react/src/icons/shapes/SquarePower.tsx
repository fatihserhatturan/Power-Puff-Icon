// This file is auto-generated. Do not edit manually.
// Source: svgs/shapes/square-power.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const SquarePowerMeta: IconMeta = {
  name: 'square-power',
  category: 'shapes',
  tags: [],
  version: '0.1.0',
}

export const SquarePowerIcon = forwardRef<SVGSVGElement, IconProps>(
  function SquarePowerIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="M12 7v4" />
        <path d="M7.998 9.003a5 5 0 1 0 8-.005" />
        <rect x="3" y="3" width="18" height="18" rx="2" />
      </Icon>
    )
  },
)

SquarePowerIcon.displayName = 'SquarePowerIcon'
