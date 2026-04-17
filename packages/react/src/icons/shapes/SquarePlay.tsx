// This file is auto-generated. Do not edit manually.
// Source: svgs/shapes/square-play.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const SquarePlayMeta: IconMeta = {
  name: 'square-play',
  category: 'shapes',
  tags: [],
  version: '0.1.0',
}

export const SquarePlayIcon = forwardRef<SVGSVGElement, IconProps>(
  function SquarePlayIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z" />
      </Icon>
    )
  },
)

SquarePlayIcon.displayName = 'SquarePlayIcon'
