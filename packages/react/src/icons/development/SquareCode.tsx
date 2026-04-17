// This file is auto-generated. Do not edit manually.
// Source: svgs/development/square-code.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const SquareCodeMeta: IconMeta = {
  name: 'square-code',
  category: 'development',
  tags: [],
  version: '0.1.0',
}

export const SquareCodeIcon = forwardRef<SVGSVGElement, IconProps>(
  function SquareCodeIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="m10 9-3 3 3 3" />
        <path d="m14 15 3-3-3-3" />
        <rect x="3" y="3" width="18" height="18" rx="2" />
      </Icon>
    )
  },
)

SquareCodeIcon.displayName = 'SquareCodeIcon'
