// This file is auto-generated. Do not edit manually.
// Source: svgs/shapes/circle-arrow-out-down-left.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const CircleArrowOutDownLeftMeta: IconMeta = {
  name: 'circle-arrow-out-down-left',
  category: 'shapes',
  tags: [],
  version: '0.1.0',
}

export const CircleArrowOutDownLeftIcon = forwardRef<SVGSVGElement, IconProps>(
  function CircleArrowOutDownLeftIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="M2 12a10 10 0 1 1 10 10" />
        <path d="m2 22 10-10" />
        <path d="M8 22H2v-6" />
      </Icon>
    )
  },
)

CircleArrowOutDownLeftIcon.displayName = 'CircleArrowOutDownLeftIcon'
