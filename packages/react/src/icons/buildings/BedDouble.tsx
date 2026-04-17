// This file is auto-generated. Do not edit manually.
// Source: svgs/buildings/bed-double.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const BedDoubleMeta: IconMeta = {
  name: 'bed-double',
  category: 'buildings',
  tags: [],
  version: '0.1.0',
}

export const BedDoubleIcon = forwardRef<SVGSVGElement, IconProps>(
  function BedDoubleIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8" />
        <path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" />
        <path d="M12 4v6" />
        <path d="M2 18h20" />
      </Icon>
    )
  },
)

BedDoubleIcon.displayName = 'BedDoubleIcon'
