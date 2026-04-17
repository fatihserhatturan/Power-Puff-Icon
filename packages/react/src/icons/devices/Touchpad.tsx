// This file is auto-generated. Do not edit manually.
// Source: svgs/devices/touchpad.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const TouchpadMeta: IconMeta = {
  name: 'touchpad',
  category: 'devices',
  tags: [],
  version: '0.1.0',
}

export const TouchpadIcon = forwardRef<SVGSVGElement, IconProps>(function TouchpadIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="M2 14h20" />
      <path d="M12 20v-6" />
    </Icon>
  )
})

TouchpadIcon.displayName = 'TouchpadIcon'
