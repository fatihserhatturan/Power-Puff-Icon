// This file is auto-generated. Do not edit manually.
// Source: svgs/buildings/bed-single.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const BedSingleMeta: IconMeta = {
  name: 'bed-single',
  category: 'buildings',
  tags: [],
  version: '0.1.0',
}

export const BedSingleIcon = forwardRef<SVGSVGElement, IconProps>(
  function BedSingleIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8" />
        <path d="M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4" />
        <path d="M3 18h18" />
      </Icon>
    )
  },
)

BedSingleIcon.displayName = 'BedSingleIcon'
