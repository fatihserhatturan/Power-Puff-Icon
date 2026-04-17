// This file is auto-generated. Do not edit manually.
// Source: svgs/weather/eclipse.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const EclipseMeta: IconMeta = {
  name: 'eclipse',
  category: 'weather',
  tags: [],
  version: '0.1.0',
}

export const EclipseIcon = forwardRef<SVGSVGElement, IconProps>(function EclipseIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a7 7 0 1 0 10 10" />
    </Icon>
  )
})

EclipseIcon.displayName = 'EclipseIcon'
