// This file is auto-generated. Do not edit manually.
// Source: svgs/shapes/square-pilcrow.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const SquarePilcrowMeta: IconMeta = {
  name: 'square-pilcrow',
  category: 'shapes',
  tags: [],
  version: '0.1.0',
}

export const SquarePilcrowIcon = forwardRef<SVGSVGElement, IconProps>(
  function SquarePilcrowIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M12 12H9.5a2.5 2.5 0 0 1 0-5H17" />
        <path d="M12 7v10" />
        <path d="M16 7v10" />
      </Icon>
    )
  },
)

SquarePilcrowIcon.displayName = 'SquarePilcrowIcon'
