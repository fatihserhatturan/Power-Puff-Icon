// This file is auto-generated. Do not edit manually.
// Source: svgs/buildings/baggage-claim.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const BaggageClaimMeta: IconMeta = {
  name: 'baggage-claim',
  category: 'buildings',
  tags: [],
  version: '0.1.0',
}

export const BaggageClaimIcon = forwardRef<SVGSVGElement, IconProps>(
  function BaggageClaimIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2" />
        <path d="M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10" />
        <rect width="13" height="8" x="8" y="6" rx="1" />
        <circle cx="18" cy="20" r="2" />
        <circle cx="9" cy="20" r="2" />
      </Icon>
    )
  },
)

BaggageClaimIcon.displayName = 'BaggageClaimIcon'
