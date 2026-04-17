// This file is auto-generated. Do not edit manually.
// Source: svgs/ui/layout-list.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const LayoutListMeta: IconMeta = {
  name: 'layout-list',
  category: 'ui',
  tags: [],
  version: '0.1.0',
}

export const LayoutListIcon = forwardRef<SVGSVGElement, IconProps>(
  function LayoutListIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <rect width="7" height="7" x="3" y="3" rx="1" />
        <rect width="7" height="7" x="3" y="14" rx="1" />
        <path d="M14 4h7" />
        <path d="M14 9h7" />
        <path d="M14 15h7" />
        <path d="M14 20h7" />
      </Icon>
    )
  },
)

LayoutListIcon.displayName = 'LayoutListIcon'
