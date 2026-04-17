// This file is auto-generated. Do not edit manually.
// Source: svgs/shapes/circle-pile.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const CirclePileMeta: IconMeta = {
  name: 'circle-pile',
  category: 'shapes',
  tags: [],
  version: '0.1.0',
}

export const CirclePileIcon = forwardRef<SVGSVGElement, IconProps>(
  function CirclePileIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <circle cx="12" cy="19" r="2" />
        <circle cx="12" cy="5" r="2" />
        <circle cx="16" cy="12" r="2" />
        <circle cx="20" cy="19" r="2" />
        <circle cx="4" cy="19" r="2" />
        <circle cx="8" cy="12" r="2" />
      </Icon>
    )
  },
)

CirclePileIcon.displayName = 'CirclePileIcon'
