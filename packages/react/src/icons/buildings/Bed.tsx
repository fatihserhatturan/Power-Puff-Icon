// This file is auto-generated. Do not edit manually.
// Source: svgs/buildings/bed.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const BedMeta: IconMeta = {
  name: 'bed',
  category: 'buildings',
  tags: [],
  version: '0.1.0',
}

export const BedIcon = forwardRef<SVGSVGElement, IconProps>(function BedIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <path d="M2 4v16" />
      <path d="M2 8h18a2 2 0 0 1 2 2v10" />
      <path d="M2 17h20" />
      <path d="M6 8v9" />
    </Icon>
  )
})

BedIcon.displayName = 'BedIcon'
