// This file is auto-generated. Do not edit manually.
// Source: svgs/shapes/circle-stop.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const CircleStopMeta: IconMeta = {
  name: 'circle-stop',
  category: 'shapes',
  tags: [],
  version: '0.1.0',
}

export const CircleStopIcon = forwardRef<SVGSVGElement, IconProps>(
  function CircleStopIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <circle cx="12" cy="12" r="10" />
        <rect x="9" y="9" width="6" height="6" rx="1" />
      </Icon>
    )
  },
)

CircleStopIcon.displayName = 'CircleStopIcon'
