// This file is auto-generated. Do not edit manually.
// Source: svgs/shapes/torus.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const TorusMeta: IconMeta = {
  name: 'torus',
  category: 'shapes',
  tags: [],
  version: '0.1.0',
}

export const TorusIcon = forwardRef<SVGSVGElement, IconProps>(function TorusIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <ellipse cx="12" cy="11" rx="3" ry="2" />
      <ellipse cx="12" cy="12.5" rx="10" ry="8.5" />
    </Icon>
  )
})

TorusIcon.displayName = 'TorusIcon'
