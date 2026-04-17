// This file is auto-generated. Do not edit manually.
// Source: svgs/devices/monitor-check.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const MonitorCheckMeta: IconMeta = {
  name: 'monitor-check',
  category: 'devices',
  tags: [],
  version: '0.1.0',
}

export const MonitorCheckIcon = forwardRef<SVGSVGElement, IconProps>(
  function MonitorCheckIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="m9 10 2 2 4-4" />
        <rect width="20" height="14" x="2" y="3" rx="2" />
        <path d="M12 17v4" />
        <path d="M8 21h8" />
      </Icon>
    )
  },
)

MonitorCheckIcon.displayName = 'MonitorCheckIcon'
