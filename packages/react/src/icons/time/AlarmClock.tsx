// This file is auto-generated. Do not edit manually.
// Source: svgs/time/alarm-clock.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const AlarmClockMeta: IconMeta = {
  name: 'alarm-clock',
  category: 'time',
  tags: [],
  version: '0.1.0',
}

export const AlarmClockIcon = forwardRef<SVGSVGElement, IconProps>(
  function AlarmClockIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <circle cx="12" cy="13" r="8" />
        <path d="M12 9v4l2 2" />
        <path d="M5 3 2 6" />
        <path d="m22 6-3-3" />
        <path d="M6.38 18.7 4 21" />
        <path d="M17.64 18.67 20 21" />
      </Icon>
    )
  },
)

AlarmClockIcon.displayName = 'AlarmClockIcon'
