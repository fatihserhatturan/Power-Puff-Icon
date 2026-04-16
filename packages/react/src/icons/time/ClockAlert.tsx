// This file is auto-generated. Do not edit manually.
// Source: svgs/time/clock-alert.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const ClockAlertMeta: IconMeta = {
  name: 'clock-alert',
  category: 'time',
  tags: [],
  version: '0.1.0',
}

export const ClockAlertIcon = forwardRef<SVGSVGElement, IconProps>(function ClockAlertIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <circle cx="12" cy="12" r="9"/>
  <polyline points="12 7 12 12 15 10"/>
  <line x1="12" y1="15" x2="12" y2="18.5"/>
  <line x1="12" y1="20.5" x2="12" y2="20.5"/>
    </Icon>
  )
})

ClockAlertIcon.displayName = 'ClockAlertIcon'
