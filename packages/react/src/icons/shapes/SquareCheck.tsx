// This file is auto-generated. Do not edit manually.
// Source: svgs/shapes/square-check.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const SquareCheckMeta: IconMeta = {
  name: 'square-check',
  category: 'shapes',
  tags: [],
  version: '0.1.0',
}

export const SquareCheckIcon = forwardRef<SVGSVGElement, IconProps>(
  function SquareCheckIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="m9 12 2 2 4-4" />
      </Icon>
    )
  },
)

SquareCheckIcon.displayName = 'SquareCheckIcon'
