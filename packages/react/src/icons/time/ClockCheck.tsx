// This file is auto-generated. Do not edit manually.
// Source: svgs/time/clock-check.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const ClockCheckMeta: IconMeta = {
  name: 'clock-check',
  category: 'time',
  tags: [],
  version: '0.1.0',
}

export const ClockCheckIcon = forwardRef<SVGSVGElement, IconProps>(
  function ClockCheckIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="M12 6v6l4 2" />
        <path d="M22 12a10 10 0 1 0-11 9.95" />
        <path d="m22 16-5.5 5.5L14 19" />
      </Icon>
    )
  },
)

ClockCheckIcon.displayName = 'ClockCheckIcon'
