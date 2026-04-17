// This file is auto-generated. Do not edit manually.
// Source: svgs/shapes/square-library.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const SquareLibraryMeta: IconMeta = {
  name: 'square-library',
  category: 'shapes',
  tags: [],
  version: '0.1.0',
}

export const SquareLibraryIcon = forwardRef<SVGSVGElement, IconProps>(
  function SquareLibraryIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M7 7v10" />
        <path d="M11 7v10" />
        <path d="m15 7 2 10" />
      </Icon>
    )
  },
)

SquareLibraryIcon.displayName = 'SquareLibraryIcon'
