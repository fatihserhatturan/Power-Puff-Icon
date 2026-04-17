// This file is auto-generated. Do not edit manually.
// Source: svgs/buildings/search-alert.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const SearchAlertMeta: IconMeta = {
  name: 'search-alert',
  category: 'buildings',
  tags: [],
  version: '0.1.0',
}

export const SearchAlertIcon = forwardRef<SVGSVGElement, IconProps>(
  function SearchAlertIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
        <path d="M11 7v4" />
        <path d="M11 15h.01" />
      </Icon>
    )
  },
)

SearchAlertIcon.displayName = 'SearchAlertIcon'
