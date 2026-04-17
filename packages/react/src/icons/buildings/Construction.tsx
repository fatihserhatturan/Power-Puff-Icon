// This file is auto-generated. Do not edit manually.
// Source: svgs/buildings/construction.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const ConstructionMeta: IconMeta = {
  name: 'construction',
  category: 'buildings',
  tags: [],
  version: '0.1.0',
}

export const ConstructionIcon = forwardRef<SVGSVGElement, IconProps>(
  function ConstructionIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <rect x="2" y="6" width="20" height="8" rx="1" />
        <path d="M17 14v7" />
        <path d="M7 14v7" />
        <path d="M17 3v3" />
        <path d="M7 3v3" />
        <path d="M10 14 2.3 6.3" />
        <path d="m14 6 7.7 7.7" />
        <path d="m8 6 8 8" />
      </Icon>
    )
  },
)

ConstructionIcon.displayName = 'ConstructionIcon'
