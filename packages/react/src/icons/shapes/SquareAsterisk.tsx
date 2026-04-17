// This file is auto-generated. Do not edit manually.
// Source: svgs/shapes/square-asterisk.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const SquareAsteriskMeta: IconMeta = {
  name: 'square-asterisk',
  category: 'shapes',
  tags: [],
  version: '0.1.0',
}

export const SquareAsteriskIcon = forwardRef<SVGSVGElement, IconProps>(
  function SquareAsteriskIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M12 8v8" />
        <path d="m8.5 14 7-4" />
        <path d="m8.5 10 7 4" />
      </Icon>
    )
  },
)

SquareAsteriskIcon.displayName = 'SquareAsteriskIcon'
