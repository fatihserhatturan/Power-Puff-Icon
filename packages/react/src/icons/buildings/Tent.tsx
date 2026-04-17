// This file is auto-generated. Do not edit manually.
// Source: svgs/buildings/tent.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const TentMeta: IconMeta = {
  name: 'tent',
  category: 'buildings',
  tags: [],
  version: '0.1.0',
}

export const TentIcon = forwardRef<SVGSVGElement, IconProps>(function TentIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <path d="M3.5 21 14 3" />
      <path d="M20.5 21 10 3" />
      <path d="M15.5 21 12 15l-3.5 6" />
      <path d="M2 21h20" />
    </Icon>
  )
})

TentIcon.displayName = 'TentIcon'
