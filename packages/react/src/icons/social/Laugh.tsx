// This file is auto-generated. Do not edit manually.
// Source: svgs/social/laugh.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const LaughMeta: IconMeta = {
  name: 'laugh',
  category: 'social',
  tags: [],
  version: '0.1.0',
}

export const LaughIcon = forwardRef<SVGSVGElement, IconProps>(function LaughIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z" />
      <line x1="9" x2="9.01" y1="9" y2="9" />
      <line x1="15" x2="15.01" y1="9" y2="9" />
    </Icon>
  )
})

LaughIcon.displayName = 'LaughIcon'
