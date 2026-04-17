// This file is auto-generated. Do not edit manually.
// Source: svgs/buildings/book-search.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const BookSearchMeta: IconMeta = {
  name: 'book-search',
  category: 'buildings',
  tags: [],
  version: '0.1.0',
}

export const BookSearchIcon = forwardRef<SVGSVGElement, IconProps>(
  function BookSearchIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="M11 22H5.5a1 1 0 0 1 0-5h4.501" />
        <path d="m21 22-1.879-1.878" />
        <path d="M3 19.5v-15A2.5 2.5 0 0 1 5.5 2H18a1 1 0 0 1 1 1v8" />
        <circle cx="17" cy="18" r="3" />
      </Icon>
    )
  },
)

BookSearchIcon.displayName = 'BookSearchIcon'
