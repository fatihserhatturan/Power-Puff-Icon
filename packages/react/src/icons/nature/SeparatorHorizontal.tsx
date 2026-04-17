// This file is auto-generated. Do not edit manually.
// Source: svgs/nature/separator-horizontal.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const SeparatorHorizontalMeta: IconMeta = {
  name: 'separator-horizontal',
  category: 'nature',
  tags: [],
  version: '0.1.0',
}

export const SeparatorHorizontalIcon = forwardRef<SVGSVGElement, IconProps>(
  function SeparatorHorizontalIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="m16 16-4 4-4-4" />
        <path d="M3 12h18" />
        <path d="m8 8 4-4 4 4" />
      </Icon>
    )
  },
)

SeparatorHorizontalIcon.displayName = 'SeparatorHorizontalIcon'
