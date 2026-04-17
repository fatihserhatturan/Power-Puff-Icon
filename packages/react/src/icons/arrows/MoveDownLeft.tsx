// This file is auto-generated. Do not edit manually.
// Source: svgs/arrows/move-down-left.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const MoveDownLeftMeta: IconMeta = {
  name: 'move-down-left',
  category: 'arrows',
  tags: [],
  version: '0.1.0',
}

export const MoveDownLeftIcon = forwardRef<SVGSVGElement, IconProps>(
  function MoveDownLeftIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="M11 19H5V13" />
        <path d="M19 5L5 19" />
      </Icon>
    )
  },
)

MoveDownLeftIcon.displayName = 'MoveDownLeftIcon'
