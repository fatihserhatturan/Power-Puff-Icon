// This file is auto-generated. Do not edit manually.
// Source: svgs/shapes/circle-x.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const CircleXMeta: IconMeta = {
  name: 'circle-x',
  category: 'shapes',
  tags: [],
  version: '0.1.0',
}

export const CircleXIcon = forwardRef<SVGSVGElement, IconProps>(function CircleXIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="m15 9-6 6" />
      <path d="m9 9 6 6" />
    </Icon>
  )
})

CircleXIcon.displayName = 'CircleXIcon'
