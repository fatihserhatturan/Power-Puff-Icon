// This file is auto-generated. Do not edit manually.
// Source: svgs/shapes/circle-pause.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const CirclePauseMeta: IconMeta = {
  name: 'circle-pause',
  category: 'shapes',
  tags: [],
  version: '0.1.0',
}

export const CirclePauseIcon = forwardRef<SVGSVGElement, IconProps>(
  function CirclePauseIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <circle cx="12" cy="12" r="10" />
        <line x1="10" x2="10" y1="15" y2="9" />
        <line x1="14" x2="14" y1="15" y2="9" />
      </Icon>
    )
  },
)

CirclePauseIcon.displayName = 'CirclePauseIcon'
