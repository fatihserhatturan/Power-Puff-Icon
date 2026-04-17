// This file is auto-generated. Do not edit manually.
// Source: svgs/shapes/circle-chevron-right.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const CircleChevronRightMeta: IconMeta = {
  name: 'circle-chevron-right',
  category: 'shapes',
  tags: [],
  version: '0.1.0',
}

export const CircleChevronRightIcon = forwardRef<SVGSVGElement, IconProps>(
  function CircleChevronRightIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <circle cx="12" cy="12" r="10" />
        <path d="m10 8 4 4-4 4" />
      </Icon>
    )
  },
)

CircleChevronRightIcon.displayName = 'CircleChevronRightIcon'
