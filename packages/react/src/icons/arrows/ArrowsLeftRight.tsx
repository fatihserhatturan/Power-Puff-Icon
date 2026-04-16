// This file is auto-generated. Do not edit manually.
// Source: svgs/arrows/arrows-left-right.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const ArrowsLeftRightMeta: IconMeta = {
  name: 'arrows-left-right',
  category: 'arrows',
  tags: [],
  version: '0.1.0',
}

export const ArrowsLeftRightIcon = forwardRef<SVGSVGElement, IconProps>(function ArrowsLeftRightIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <polyline points="8 8 4 12 8 16"/>
  <line x1="4" y1="12" x2="20" y2="12"/>
  <polyline points="16 8 20 12 16 16"/>
    </Icon>
  )
})

ArrowsLeftRightIcon.displayName = 'ArrowsLeftRightIcon'
