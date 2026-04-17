// This file is auto-generated. Do not edit manually.
// Source: svgs/commerce/currency.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const CurrencyMeta: IconMeta = {
  name: 'currency',
  category: 'commerce',
  tags: [],
  version: '0.1.0',
}

export const CurrencyIcon = forwardRef<SVGSVGElement, IconProps>(function CurrencyIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <circle cx="12" cy="12" r="8" />
      <line x1="3" x2="6" y1="3" y2="6" />
      <line x1="21" x2="18" y1="3" y2="6" />
      <line x1="3" x2="6" y1="21" y2="18" />
      <line x1="21" x2="18" y1="21" y2="18" />
    </Icon>
  )
})

CurrencyIcon.displayName = 'CurrencyIcon'
