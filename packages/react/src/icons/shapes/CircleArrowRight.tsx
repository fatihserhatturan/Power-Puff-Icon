// This file is auto-generated. Do not edit manually.
// Source: svgs/shapes/circle-arrow-right.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const CircleArrowRightMeta: IconMeta = {
  name: 'circle-arrow-right',
  category: 'shapes',
  tags: [],
  version: '0.1.0',
}

export const CircleArrowRightIcon = forwardRef<SVGSVGElement, IconProps>(
  function CircleArrowRightIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <circle cx="12" cy="12" r="10" />
        <path d="m12 16 4-4-4-4" />
        <path d="M8 12h8" />
      </Icon>
    )
  },
)

CircleArrowRightIcon.displayName = 'CircleArrowRightIcon'
