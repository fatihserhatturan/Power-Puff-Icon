// This file is auto-generated. Do not edit manually.
// Source: svgs/devices/battery-warning.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const BatteryWarningMeta: IconMeta = {
  name: 'battery-warning',
  category: 'devices',
  tags: [],
  version: '0.1.0',
}

export const BatteryWarningIcon = forwardRef<SVGSVGElement, IconProps>(
  function BatteryWarningIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="M10 17h.01" />
        <path d="M10 7v6" />
        <path d="M14 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2" />
        <path d="M22 14v-4" />
        <path d="M6 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2" />
      </Icon>
    )
  },
)

BatteryWarningIcon.displayName = 'BatteryWarningIcon'
