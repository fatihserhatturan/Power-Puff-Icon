// This file is auto-generated. Do not edit manually.
// Source: svgs/time/clock-1.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const Clock1Meta: IconMeta = {
  name: 'clock-1',
  category: 'time',
  tags: [],
  version: '0.1.0',
}

export const Clock1Icon = forwardRef<SVGSVGElement, IconProps>(function Clock1Icon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l2-4" />
    </Icon>
  )
})

Clock1Icon.displayName = 'Clock1Icon'
