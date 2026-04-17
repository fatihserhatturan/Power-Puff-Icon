// This file is auto-generated. Do not edit manually.
// Source: svgs/medical/pill-bottle.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const PillBottleMeta: IconMeta = {
  name: 'pill-bottle',
  category: 'medical',
  tags: [],
  version: '0.1.0',
}

export const PillBottleIcon = forwardRef<SVGSVGElement, IconProps>(
  function PillBottleIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="M18 11h-4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h4" />
        <path d="M6 7v13a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7" />
        <rect width="16" height="5" x="4" y="2" rx="1" />
      </Icon>
    )
  },
)

PillBottleIcon.displayName = 'PillBottleIcon'
