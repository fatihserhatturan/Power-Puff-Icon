// This file is auto-generated. Do not edit manually.
// Source: svgs/shapes/circle-arrow-up.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const CircleArrowUpMeta: IconMeta = {
  name: 'circle-arrow-up',
  category: 'shapes',
  tags: [],
  version: '0.1.0',
}

export const CircleArrowUpIcon = forwardRef<SVGSVGElement, IconProps>(
  function CircleArrowUpIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <circle cx="12" cy="12" r="10" />
        <path d="m16 12-4-4-4 4" />
        <path d="M12 16V8" />
      </Icon>
    )
  },
)

CircleArrowUpIcon.displayName = 'CircleArrowUpIcon'
