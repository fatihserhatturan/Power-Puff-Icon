// This file is auto-generated. Do not edit manually.
// Source: svgs/shapes/square-slash.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const SquareSlashMeta: IconMeta = {
  name: 'square-slash',
  category: 'shapes',
  tags: [],
  version: '0.1.0',
}

export const SquareSlashIcon = forwardRef<SVGSVGElement, IconProps>(
  function SquareSlashIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <line x1="9" x2="15" y1="15" y2="9" />
      </Icon>
    )
  },
)

SquareSlashIcon.displayName = 'SquareSlashIcon'
