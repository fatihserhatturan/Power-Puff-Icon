// This file is auto-generated. Do not edit manually.
// Source: svgs/nature/fishing-rod.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const FishingRodMeta: IconMeta = {
  name: 'fishing-rod',
  category: 'nature',
  tags: [],
  version: '0.1.0',
}

export const FishingRodIcon = forwardRef<SVGSVGElement, IconProps>(
  function FishingRodIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="M4 11h1" />
        <path d="M8 15a2 2 0 0 1-4 0V3a1 1 0 0 1 1-1h.5C14 2 20 9 20 18v4" />
        <circle cx="18" cy="18" r="2" />
      </Icon>
    )
  },
)

FishingRodIcon.displayName = 'FishingRodIcon'
