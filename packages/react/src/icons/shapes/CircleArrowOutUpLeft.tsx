// This file is auto-generated. Do not edit manually.
// Source: svgs/shapes/circle-arrow-out-up-left.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const CircleArrowOutUpLeftMeta: IconMeta = {
  name: 'circle-arrow-out-up-left',
  category: 'shapes',
  tags: [],
  version: '0.1.0',
}

export const CircleArrowOutUpLeftIcon = forwardRef<SVGSVGElement, IconProps>(
  function CircleArrowOutUpLeftIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="M2 8V2h6" />
        <path d="m2 2 10 10" />
        <path d="M12 2A10 10 0 1 1 2 12" />
      </Icon>
    )
  },
)

CircleArrowOutUpLeftIcon.displayName = 'CircleArrowOutUpLeftIcon'
