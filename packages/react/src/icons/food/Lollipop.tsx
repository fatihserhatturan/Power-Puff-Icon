// This file is auto-generated. Do not edit manually.
// Source: svgs/food/lollipop.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const LollipopMeta: IconMeta = {
  name: 'lollipop',
  category: 'food',
  tags: [],
  version: '0.1.0',
}

export const LollipopIcon = forwardRef<SVGSVGElement, IconProps>(function LollipopIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
      <path d="M11 11a2 2 0 0 0 4 0 4 4 0 0 0-8 0 6 6 0 0 0 12 0" />
    </Icon>
  )
})

LollipopIcon.displayName = 'LollipopIcon'
