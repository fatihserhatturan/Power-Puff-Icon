// This file is auto-generated. Do not edit manually.
// Source: svgs/buildings/search-check.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const SearchCheckMeta: IconMeta = {
  name: 'search-check',
  category: 'buildings',
  tags: [],
  version: '0.1.0',
}

export const SearchCheckIcon = forwardRef<SVGSVGElement, IconProps>(
  function SearchCheckIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="m8 11 2 2 4-4" />
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </Icon>
    )
  },
)

SearchCheckIcon.displayName = 'SearchCheckIcon'
