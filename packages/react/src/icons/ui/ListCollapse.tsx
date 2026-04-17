// This file is auto-generated. Do not edit manually.
// Source: svgs/ui/list-collapse.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const ListCollapseMeta: IconMeta = {
  name: 'list-collapse',
  category: 'ui',
  tags: [],
  version: '0.1.0',
}

export const ListCollapseIcon = forwardRef<SVGSVGElement, IconProps>(
  function ListCollapseIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="M10 5h11" />
        <path d="M10 12h11" />
        <path d="M10 19h11" />
        <path d="m3 10 3-3-3-3" />
        <path d="m3 20 3-3-3-3" />
      </Icon>
    )
  },
)

ListCollapseIcon.displayName = 'ListCollapseIcon'
