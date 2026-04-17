// This file is auto-generated. Do not edit manually.
// Source: svgs/shapes/square-round-corner.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const SquareRoundCornerMeta: IconMeta = {
  name: 'square-round-corner',
  category: 'shapes',
  tags: [],
  version: '0.1.0',
}

export const SquareRoundCornerIcon = forwardRef<SVGSVGElement, IconProps>(
  function SquareRoundCornerIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="M21 11a8 8 0 0 0-8-8" />
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      </Icon>
    )
  },
)

SquareRoundCornerIcon.displayName = 'SquareRoundCornerIcon'
