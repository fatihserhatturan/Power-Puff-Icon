// This file is auto-generated. Do not edit manually.
// Source: svgs/commerce/banknote.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const BanknoteMeta: IconMeta = {
  name: 'banknote',
  category: 'commerce',
  tags: [],
  version: '0.1.0',
}

export const BanknoteIcon = forwardRef<SVGSVGElement, IconProps>(function BanknoteIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <rect width="20" height="12" x="2" y="6" rx="2" />
      <circle cx="12" cy="12" r="2" />
      <path d="M6 12h.01M18 12h.01" />
    </Icon>
  )
})

BanknoteIcon.displayName = 'BanknoteIcon'
