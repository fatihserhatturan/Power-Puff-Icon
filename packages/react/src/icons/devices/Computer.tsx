// This file is auto-generated. Do not edit manually.
// Source: svgs/devices/computer.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const ComputerMeta: IconMeta = {
  name: 'computer',
  category: 'devices',
  tags: [],
  version: '0.1.0',
}

export const ComputerIcon = forwardRef<SVGSVGElement, IconProps>(function ComputerIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <rect width="14" height="8" x="5" y="2" rx="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" />
      <path d="M6 18h2" />
      <path d="M12 18h6" />
    </Icon>
  )
})

ComputerIcon.displayName = 'ComputerIcon'
