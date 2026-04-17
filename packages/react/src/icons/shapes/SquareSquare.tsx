// This file is auto-generated. Do not edit manually.
// Source: svgs/shapes/square-square.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const SquareSquareMeta: IconMeta = {
  name: 'square-square',
  category: 'shapes',
  tags: [],
  version: '0.1.0',
}

export const SquareSquareIcon = forwardRef<SVGSVGElement, IconProps>(
  function SquareSquareIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <rect x="8" y="8" width="8" height="8" rx="1" />
      </Icon>
    )
  },
)

SquareSquareIcon.displayName = 'SquareSquareIcon'
