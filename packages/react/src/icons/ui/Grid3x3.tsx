// This file is auto-generated. Do not edit manually.
// Source: svgs/ui/grid-3x3.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const Grid3x3Meta: IconMeta = {
  name: 'grid-3x3',
  category: 'ui',
  tags: [],
  version: '0.1.0',
}

export const Grid3x3Icon = forwardRef<SVGSVGElement, IconProps>(function Grid3x3Icon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M3 9h18" />
      <path d="M3 15h18" />
      <path d="M9 3v18" />
      <path d="M15 3v18" />
    </Icon>
  )
})

Grid3x3Icon.displayName = 'Grid3x3Icon'
