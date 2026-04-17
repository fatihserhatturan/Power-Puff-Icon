// This file is auto-generated. Do not edit manually.
// Source: svgs/chart/sheet.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const SheetMeta: IconMeta = {
  name: 'sheet',
  category: 'chart',
  tags: [],
  version: '0.1.0',
}

export const SheetIcon = forwardRef<SVGSVGElement, IconProps>(function SheetIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <line x1="3" x2="21" y1="9" y2="9" />
      <line x1="3" x2="21" y1="15" y2="15" />
      <line x1="9" x2="9" y1="9" y2="21" />
      <line x1="15" x2="15" y1="9" y2="21" />
    </Icon>
  )
})

SheetIcon.displayName = 'SheetIcon'
