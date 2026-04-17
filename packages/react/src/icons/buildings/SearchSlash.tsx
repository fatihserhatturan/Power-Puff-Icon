// This file is auto-generated. Do not edit manually.
// Source: svgs/buildings/search-slash.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const SearchSlashMeta: IconMeta = {
  name: 'search-slash',
  category: 'buildings',
  tags: [],
  version: '0.1.0',
}

export const SearchSlashIcon = forwardRef<SVGSVGElement, IconProps>(
  function SearchSlashIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="m13.5 8.5-5 5" />
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </Icon>
    )
  },
)

SearchSlashIcon.displayName = 'SearchSlashIcon'
