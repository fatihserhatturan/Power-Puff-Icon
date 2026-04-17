// This file is auto-generated. Do not edit manually.
// Source: svgs/shapes/square-x.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const SquareXMeta: IconMeta = {
  name: 'square-x',
  category: 'shapes',
  tags: [],
  version: '0.1.0',
}

export const SquareXIcon = forwardRef<SVGSVGElement, IconProps>(function SquareXIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <path d="m15 9-6 6" />
      <path d="m9 9 6 6" />
    </Icon>
  )
})

SquareXIcon.displayName = 'SquareXIcon'
