// This file is auto-generated. Do not edit manually.
// Source: svgs/shapes/circle-alert.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const CircleAlertMeta: IconMeta = {
  name: 'circle-alert',
  category: 'shapes',
  tags: [],
  version: '0.1.0',
}

export const CircleAlertIcon = forwardRef<SVGSVGElement, IconProps>(
  function CircleAlertIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <circle cx="12" cy="12" r="10" />
        <line x1="12" x2="12" y1="8" y2="12" />
        <line x1="12" x2="12.01" y1="16" y2="16" />
      </Icon>
    )
  },
)

CircleAlertIcon.displayName = 'CircleAlertIcon'
