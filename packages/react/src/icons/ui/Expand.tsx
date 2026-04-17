// This file is auto-generated. Do not edit manually.
// Source: svgs/ui/expand.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const ExpandMeta: IconMeta = {
  name: 'expand',
  category: 'ui',
  tags: [],
  version: '0.1.0',
}

export const ExpandIcon = forwardRef<SVGSVGElement, IconProps>(function ExpandIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <path d="m15 15 6 6" />
      <path d="m15 9 6-6" />
      <path d="M21 16v5h-5" />
      <path d="M21 8V3h-5" />
      <path d="M3 16v5h5" />
      <path d="m3 21 6-6" />
      <path d="M3 8V3h5" />
      <path d="M9 9 3 3" />
    </Icon>
  )
})

ExpandIcon.displayName = 'ExpandIcon'
