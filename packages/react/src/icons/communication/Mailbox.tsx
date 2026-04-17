// This file is auto-generated. Do not edit manually.
// Source: svgs/communication/mailbox.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const MailboxMeta: IconMeta = {
  name: 'mailbox',
  category: 'communication',
  tags: [],
  version: '0.1.0',
}

export const MailboxIcon = forwardRef<SVGSVGElement, IconProps>(function MailboxIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <path d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z" />
      <polyline points="15,9 18,9 18,11" />
      <path d="M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2" />
      <line x1="6" x2="7" y1="10" y2="10" />
    </Icon>
  )
})

MailboxIcon.displayName = 'MailboxIcon'
