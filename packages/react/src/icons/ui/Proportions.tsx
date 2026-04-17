// This file is auto-generated. Do not edit manually.
// Source: svgs/ui/proportions.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const ProportionsMeta: IconMeta = {
  name: 'proportions',
  category: 'ui',
  tags: [],
  version: '0.1.0',
}

export const ProportionsIcon = forwardRef<SVGSVGElement, IconProps>(
  function ProportionsIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="M12 9v11" />
        <path d="M2 9h13a2 2 0 0 1 2 2v9" />
      </Icon>
    )
  },
)

ProportionsIcon.displayName = 'ProportionsIcon'
