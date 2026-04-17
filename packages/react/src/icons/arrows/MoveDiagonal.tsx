// This file is auto-generated. Do not edit manually.
// Source: svgs/arrows/move-diagonal.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const MoveDiagonalMeta: IconMeta = {
  name: 'move-diagonal',
  category: 'arrows',
  tags: [],
  version: '0.1.0',
}

export const MoveDiagonalIcon = forwardRef<SVGSVGElement, IconProps>(
  function MoveDiagonalIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="M11 19H5v-6" />
        <path d="M13 5h6v6" />
        <path d="M19 5 5 19" />
      </Icon>
    )
  },
)

MoveDiagonalIcon.displayName = 'MoveDiagonalIcon'
