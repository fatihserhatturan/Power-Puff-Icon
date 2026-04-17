// This file is auto-generated. Do not edit manually.
// Source: svgs/social/meh.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const MehMeta: IconMeta = {
  name: 'meh',
  category: 'social',
  tags: [],
  version: '0.1.0',
}

export const MehIcon = forwardRef<SVGSVGElement, IconProps>(function MehIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <circle cx="12" cy="12" r="10" />
      <line x1="8" x2="16" y1="15" y2="15" />
      <line x1="9" x2="9.01" y1="9" y2="9" />
      <line x1="15" x2="15.01" y1="9" y2="9" />
    </Icon>
  )
})

MehIcon.displayName = 'MehIcon'
