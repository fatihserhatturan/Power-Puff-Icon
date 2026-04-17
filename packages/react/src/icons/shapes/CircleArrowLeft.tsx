// This file is auto-generated. Do not edit manually.
// Source: svgs/shapes/circle-arrow-left.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const CircleArrowLeftMeta: IconMeta = {
  name: 'circle-arrow-left',
  category: 'shapes',
  tags: [],
  version: '0.1.0',
}

export const CircleArrowLeftIcon = forwardRef<SVGSVGElement, IconProps>(
  function CircleArrowLeftIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <circle cx="12" cy="12" r="10" />
        <path d="m12 8-4 4 4 4" />
        <path d="M16 12H8" />
      </Icon>
    )
  },
)

CircleArrowLeftIcon.displayName = 'CircleArrowLeftIcon'
