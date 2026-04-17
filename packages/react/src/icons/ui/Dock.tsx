// This file is auto-generated. Do not edit manually.
// Source: svgs/ui/dock.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const DockMeta: IconMeta = {
  name: 'dock',
  category: 'ui',
  tags: [],
  version: '0.1.0',
}

export const DockIcon = forwardRef<SVGSVGElement, IconProps>(function DockIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <path d="M2 8h20" />
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="M6 16h12" />
    </Icon>
  )
})

DockIcon.displayName = 'DockIcon'
