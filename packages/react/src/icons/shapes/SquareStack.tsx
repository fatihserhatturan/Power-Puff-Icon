// This file is auto-generated. Do not edit manually.
// Source: svgs/shapes/square-stack.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const SquareStackMeta: IconMeta = {
  name: 'square-stack',
  category: 'shapes',
  tags: [],
  version: '0.1.0',
}

export const SquareStackIcon = forwardRef<SVGSVGElement, IconProps>(
  function SquareStackIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2" />
        <path d="M10 16c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2" />
        <rect width="8" height="8" x="14" y="14" rx="2" />
      </Icon>
    )
  },
)

SquareStackIcon.displayName = 'SquareStackIcon'
