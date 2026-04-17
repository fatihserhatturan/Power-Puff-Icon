// This file is auto-generated. Do not edit manually.
// Source: svgs/text/pi.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const PiMeta: IconMeta = {
  name: 'pi',
  category: 'text',
  tags: [],
  version: '0.1.0',
}

export const PiIcon = forwardRef<SVGSVGElement, IconProps>(function PiIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <line x1="9" x2="9" y1="4" y2="20" />
      <path d="M4 7c0-1.7 1.3-3 3-3h13" />
      <path d="M18 20c-1.7 0-3-1.3-3-3V4" />
    </Icon>
  )
})

PiIcon.displayName = 'PiIcon'
