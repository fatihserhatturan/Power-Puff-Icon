// This file is auto-generated. Do not edit manually.
// Source: svgs/shapes/square-pi.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const SquarePiMeta: IconMeta = {
  name: 'square-pi',
  category: 'shapes',
  tags: [],
  version: '0.1.0',
}

export const SquarePiIcon = forwardRef<SVGSVGElement, IconProps>(function SquarePiIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M7 7h10" />
      <path d="M10 7v10" />
      <path d="M16 17a2 2 0 0 1-2-2V7" />
    </Icon>
  )
})

SquarePiIcon.displayName = 'SquarePiIcon'
