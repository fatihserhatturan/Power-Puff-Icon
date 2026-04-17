// This file is auto-generated. Do not edit manually.
// Source: svgs/shapes/square-menu.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const SquareMenuMeta: IconMeta = {
  name: 'square-menu',
  category: 'shapes',
  tags: [],
  version: '0.1.0',
}

export const SquareMenuIcon = forwardRef<SVGSVGElement, IconProps>(
  function SquareMenuIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M7 8h10" />
        <path d="M7 12h10" />
        <path d="M7 16h10" />
      </Icon>
    )
  },
)

SquareMenuIcon.displayName = 'SquareMenuIcon'
