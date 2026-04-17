// This file is auto-generated. Do not edit manually.
// Source: svgs/shapes/circle-small.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const CircleSmallMeta: IconMeta = {
  name: 'circle-small',
  category: 'shapes',
  tags: [],
  version: '0.1.0',
}

export const CircleSmallIcon = forwardRef<SVGSVGElement, IconProps>(
  function CircleSmallIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <circle cx="12" cy="12" r="6" />
      </Icon>
    )
  },
)

CircleSmallIcon.displayName = 'CircleSmallIcon'
