// This file is auto-generated. Do not edit manually.
// Source: svgs/arrows/move-up-right.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const MoveUpRightMeta: IconMeta = {
  name: 'move-up-right',
  category: 'arrows',
  tags: [],
  version: '0.1.0',
}

export const MoveUpRightIcon = forwardRef<SVGSVGElement, IconProps>(
  function MoveUpRightIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="M13 5H19V11" />
        <path d="M19 5L5 19" />
      </Icon>
    )
  },
)

MoveUpRightIcon.displayName = 'MoveUpRightIcon'
