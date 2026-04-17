// This file is auto-generated. Do not edit manually.
// Source: svgs/devices/hard-hat.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const HardHatMeta: IconMeta = {
  name: 'hard-hat',
  category: 'devices',
  tags: [],
  version: '0.1.0',
}

export const HardHatIcon = forwardRef<SVGSVGElement, IconProps>(function HardHatIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5" />
      <path d="M14 6a6 6 0 0 1 6 6v3" />
      <path d="M4 15v-3a6 6 0 0 1 6-6" />
      <rect x="2" y="15" width="20" height="4" rx="1" />
    </Icon>
  )
})

HardHatIcon.displayName = 'HardHatIcon'
