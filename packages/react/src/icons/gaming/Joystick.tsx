// This file is auto-generated. Do not edit manually.
// Source: svgs/gaming/joystick.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const JoystickMeta: IconMeta = {
  name: 'joystick',
  category: 'gaming',
  tags: [],
  version: '0.1.0',
}

export const JoystickIcon = forwardRef<SVGSVGElement, IconProps>(function JoystickIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <path d="M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z" />
      <path d="M6 15v-2" />
      <path d="M12 15V9" />
      <circle cx="12" cy="6" r="3" />
    </Icon>
  )
})

JoystickIcon.displayName = 'JoystickIcon'
