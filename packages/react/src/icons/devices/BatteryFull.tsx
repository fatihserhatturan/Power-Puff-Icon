// This file is auto-generated. Do not edit manually.
// Source: svgs/devices/battery-full.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const BatteryFullMeta: IconMeta = {
  name: 'battery-full',
  category: 'devices',
  tags: [],
  version: '0.1.0',
}

export const BatteryFullIcon = forwardRef<SVGSVGElement, IconProps>(
  function BatteryFullIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="M10 10v4" />
        <path d="M14 10v4" />
        <path d="M22 14v-4" />
        <path d="M6 10v4" />
        <rect x="2" y="6" width="16" height="12" rx="2" />
      </Icon>
    )
  },
)

BatteryFullIcon.displayName = 'BatteryFullIcon'
