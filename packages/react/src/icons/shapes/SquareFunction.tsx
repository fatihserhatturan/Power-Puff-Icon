// This file is auto-generated. Do not edit manually.
// Source: svgs/shapes/square-function.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const SquareFunctionMeta: IconMeta = {
  name: 'square-function',
  category: 'shapes',
  tags: [],
  version: '0.1.0',
}

export const SquareFunctionIcon = forwardRef<SVGSVGElement, IconProps>(
  function SquareFunctionIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
        <path d="M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3" />
        <path d="M9 11.2h5.7" />
      </Icon>
    )
  },
)

SquareFunctionIcon.displayName = 'SquareFunctionIcon'
