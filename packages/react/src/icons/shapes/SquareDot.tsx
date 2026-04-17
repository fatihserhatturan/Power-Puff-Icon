// This file is auto-generated. Do not edit manually.
// Source: svgs/shapes/square-dot.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const SquareDotMeta: IconMeta = {
  name: 'square-dot',
  category: 'shapes',
  tags: [],
  version: '0.1.0',
}

export const SquareDotIcon = forwardRef<SVGSVGElement, IconProps>(
  function SquareDotIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <circle cx="12" cy="12" r="1" />
      </Icon>
    )
  },
)

SquareDotIcon.displayName = 'SquareDotIcon'
