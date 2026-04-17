// This file is auto-generated. Do not edit manually.
// Source: svgs/nature/separator-vertical.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const SeparatorVerticalMeta: IconMeta = {
  name: 'separator-vertical',
  category: 'nature',
  tags: [],
  version: '0.1.0',
}

export const SeparatorVerticalIcon = forwardRef<SVGSVGElement, IconProps>(
  function SeparatorVerticalIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="M12 3v18" />
        <path d="m16 16 4-4-4-4" />
        <path d="m8 8-4 4 4 4" />
      </Icon>
    )
  },
)

SeparatorVerticalIcon.displayName = 'SeparatorVerticalIcon'
