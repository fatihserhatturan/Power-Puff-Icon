// This file is auto-generated. Do not edit manually.
// Source: svgs/arrows/move-down-right.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const MoveDownRightMeta: IconMeta = {
  name: 'move-down-right',
  category: 'arrows',
  tags: [],
  version: '0.1.0',
}

export const MoveDownRightIcon = forwardRef<SVGSVGElement, IconProps>(
  function MoveDownRightIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="M19 13V19H13" />
        <path d="M5 5L19 19" />
      </Icon>
    )
  },
)

MoveDownRightIcon.displayName = 'MoveDownRightIcon'
