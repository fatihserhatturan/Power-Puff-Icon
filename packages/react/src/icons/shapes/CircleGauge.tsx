// This file is auto-generated. Do not edit manually.
// Source: svgs/shapes/circle-gauge.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const CircleGaugeMeta: IconMeta = {
  name: 'circle-gauge',
  category: 'shapes',
  tags: [],
  version: '0.1.0',
}

export const CircleGaugeIcon = forwardRef<SVGSVGElement, IconProps>(
  function CircleGaugeIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="M15.6 2.7a10 10 0 1 0 5.7 5.7" />
        <circle cx="12" cy="12" r="2" />
        <path d="M13.4 10.6 19 5" />
      </Icon>
    )
  },
)

CircleGaugeIcon.displayName = 'CircleGaugeIcon'
