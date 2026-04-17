// This file is auto-generated. Do not edit manually.
// Source: svgs/ui/id-card.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const IdCardMeta: IconMeta = {
  name: 'id-card',
  category: 'ui',
  tags: [],
  version: '0.1.0',
}

export const IdCardIcon = forwardRef<SVGSVGElement, IconProps>(function IdCardIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <path d="M16 10h2" />
      <path d="M16 14h2" />
      <path d="M6.17 15a3 3 0 0 1 5.66 0" />
      <circle cx="9" cy="11" r="2" />
      <rect x="2" y="5" width="20" height="14" rx="2" />
    </Icon>
  )
})

IdCardIcon.displayName = 'IdCardIcon'
