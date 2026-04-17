// This file is auto-generated. Do not edit manually.
// Source: svgs/buildings/toy-brick.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const ToyBrickMeta: IconMeta = {
  name: 'toy-brick',
  category: 'buildings',
  tags: [],
  version: '0.1.0',
}

export const ToyBrickIcon = forwardRef<SVGSVGElement, IconProps>(function ToyBrickIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <rect width="18" height="12" x="3" y="8" rx="1" />
      <path d="M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3" />
      <path d="M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3" />
    </Icon>
  )
})

ToyBrickIcon.displayName = 'ToyBrickIcon'
