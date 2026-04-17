// This file is auto-generated. Do not edit manually.
// Source: svgs/shapes/diamond-plus.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const DiamondPlusMeta: IconMeta = {
  name: 'diamond-plus',
  category: 'shapes',
  tags: [],
  version: '0.1.0',
}

export const DiamondPlusIcon = forwardRef<SVGSVGElement, IconProps>(
  function DiamondPlusIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="M12 8v8" />
        <path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z" />
        <path d="M8 12h8" />
      </Icon>
    )
  },
)

DiamondPlusIcon.displayName = 'DiamondPlusIcon'
