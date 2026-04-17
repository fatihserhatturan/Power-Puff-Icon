// This file is auto-generated. Do not edit manually.
// Source: svgs/ui/grid-3x2.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const Grid3x2Meta: IconMeta = {
  name: 'grid-3x2',
  category: 'ui',
  tags: [],
  version: '0.1.0',
}

export const Grid3x2Icon = forwardRef<SVGSVGElement, IconProps>(function Grid3x2Icon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <path d="M15 3v18" />
      <path d="M3 12h18" />
      <path d="M9 3v18" />
      <rect x="3" y="3" width="18" height="18" rx="2" />
    </Icon>
  )
})

Grid3x2Icon.displayName = 'Grid3x2Icon'
