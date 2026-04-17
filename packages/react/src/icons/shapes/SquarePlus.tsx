// This file is auto-generated. Do not edit manually.
// Source: svgs/shapes/square-plus.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const SquarePlusMeta: IconMeta = {
  name: 'square-plus',
  category: 'shapes',
  tags: [],
  version: '0.1.0',
}

export const SquarePlusIcon = forwardRef<SVGSVGElement, IconProps>(
  function SquarePlusIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M8 12h8" />
        <path d="M12 8v8" />
      </Icon>
    )
  },
)

SquarePlusIcon.displayName = 'SquarePlusIcon'
