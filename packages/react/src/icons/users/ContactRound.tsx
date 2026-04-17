// This file is auto-generated. Do not edit manually.
// Source: svgs/users/contact-round.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const ContactRoundMeta: IconMeta = {
  name: 'contact-round',
  category: 'users',
  tags: [],
  version: '0.1.0',
}

export const ContactRoundIcon = forwardRef<SVGSVGElement, IconProps>(
  function ContactRoundIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="M16 2v2" />
        <path d="M17.915 22a6 6 0 0 0-12 0" />
        <path d="M8 2v2" />
        <circle cx="12" cy="12" r="4" />
        <rect x="3" y="4" width="18" height="18" rx="2" />
      </Icon>
    )
  },
)

ContactRoundIcon.displayName = 'ContactRoundIcon'
