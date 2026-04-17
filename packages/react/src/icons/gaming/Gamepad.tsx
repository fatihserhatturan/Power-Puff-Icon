// This file is auto-generated. Do not edit manually.
// Source: svgs/gaming/gamepad.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const GamepadMeta: IconMeta = {
  name: 'gamepad',
  category: 'gaming',
  tags: [],
  version: '0.1.0',
}

export const GamepadIcon = forwardRef<SVGSVGElement, IconProps>(function GamepadIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <line x1="6" x2="10" y1="12" y2="12" />
      <line x1="8" x2="8" y1="10" y2="14" />
      <line x1="15" x2="15.01" y1="13" y2="13" />
      <line x1="18" x2="18.01" y1="11" y2="11" />
      <rect width="20" height="12" x="2" y="6" rx="2" />
    </Icon>
  )
})

GamepadIcon.displayName = 'GamepadIcon'
