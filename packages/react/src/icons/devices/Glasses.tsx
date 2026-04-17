// This file is auto-generated. Do not edit manually.
// Source: svgs/devices/glasses.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const GlassesMeta: IconMeta = {
  name: 'glasses',
  category: 'devices',
  tags: [],
  version: '0.1.0',
}

export const GlassesIcon = forwardRef<SVGSVGElement, IconProps>(function GlassesIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <circle cx="6" cy="15" r="4" />
      <circle cx="18" cy="15" r="4" />
      <path d="M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2" />
      <path d="M2.5 13 5 7c.7-1.3 1.4-2 3-2" />
      <path d="M21.5 13 19 7c-.7-1.3-1.5-2-3-2" />
    </Icon>
  )
})

GlassesIcon.displayName = 'GlassesIcon'
