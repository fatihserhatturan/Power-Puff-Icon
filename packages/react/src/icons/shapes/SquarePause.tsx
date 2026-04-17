// This file is auto-generated. Do not edit manually.
// Source: svgs/shapes/square-pause.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const SquarePauseMeta: IconMeta = {
  name: 'square-pause',
  category: 'shapes',
  tags: [],
  version: '0.1.0',
}

export const SquarePauseIcon = forwardRef<SVGSVGElement, IconProps>(
  function SquarePauseIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <line x1="10" x2="10" y1="15" y2="9" />
        <line x1="14" x2="14" y1="15" y2="9" />
      </Icon>
    )
  },
)

SquarePauseIcon.displayName = 'SquarePauseIcon'
