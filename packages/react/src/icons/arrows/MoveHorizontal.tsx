// This file is auto-generated. Do not edit manually.
// Source: svgs/arrows/move-horizontal.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const MoveHorizontalMeta: IconMeta = {
  name: 'move-horizontal',
  category: 'arrows',
  tags: [],
  version: '0.1.0',
}

export const MoveHorizontalIcon = forwardRef<SVGSVGElement, IconProps>(
  function MoveHorizontalIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="m18 8 4 4-4 4" />
        <path d="M2 12h20" />
        <path d="m6 8-4 4 4 4" />
      </Icon>
    )
  },
)

MoveHorizontalIcon.displayName = 'MoveHorizontalIcon'
