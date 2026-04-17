// This file is auto-generated. Do not edit manually.
// Source: svgs/shapes/square-stop.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const SquareStopMeta: IconMeta = {
  name: 'square-stop',
  category: 'shapes',
  tags: [],
  version: '0.1.0',
}

export const SquareStopIcon = forwardRef<SVGSVGElement, IconProps>(
  function SquareStopIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <rect x="9" y="9" width="6" height="6" rx="1" />
      </Icon>
    )
  },
)

SquareStopIcon.displayName = 'SquareStopIcon'
