// This file is auto-generated. Do not edit manually.
// Source: svgs/arrows/a-arrow-down.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const AArrowDownMeta: IconMeta = {
  name: 'a-arrow-down',
  category: 'arrows',
  tags: [],
  version: '0.1.0',
}

export const AArrowDownIcon = forwardRef<SVGSVGElement, IconProps>(
  function AArrowDownIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="m14 12 4 4 4-4" />
        <path d="M18 16V7" />
        <path d="m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16" />
        <path d="M3.304 13h6.392" />
      </Icon>
    )
  },
)

AArrowDownIcon.displayName = 'AArrowDownIcon'
