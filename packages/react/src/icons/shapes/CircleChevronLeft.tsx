// This file is auto-generated. Do not edit manually.
// Source: svgs/shapes/circle-chevron-left.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const CircleChevronLeftMeta: IconMeta = {
  name: 'circle-chevron-left',
  category: 'shapes',
  tags: [],
  version: '0.1.0',
}

export const CircleChevronLeftIcon = forwardRef<SVGSVGElement, IconProps>(
  function CircleChevronLeftIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <circle cx="12" cy="12" r="10" />
        <path d="m14 16-4-4 4-4" />
      </Icon>
    )
  },
)

CircleChevronLeftIcon.displayName = 'CircleChevronLeftIcon'
