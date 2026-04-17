// This file is auto-generated. Do not edit manually.
// Source: svgs/shapes/circle-arrow-out-down-right.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const CircleArrowOutDownRightMeta: IconMeta = {
  name: 'circle-arrow-out-down-right',
  category: 'shapes',
  tags: [],
  version: '0.1.0',
}

export const CircleArrowOutDownRightIcon = forwardRef<SVGSVGElement, IconProps>(
  function CircleArrowOutDownRightIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="M12 22a10 10 0 1 1 10-10" />
        <path d="M22 22 12 12" />
        <path d="M22 16v6h-6" />
      </Icon>
    )
  },
)

CircleArrowOutDownRightIcon.displayName = 'CircleArrowOutDownRightIcon'
