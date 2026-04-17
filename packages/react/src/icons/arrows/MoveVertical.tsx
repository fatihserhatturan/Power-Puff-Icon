// This file is auto-generated. Do not edit manually.
// Source: svgs/arrows/move-vertical.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const MoveVerticalMeta: IconMeta = {
  name: 'move-vertical',
  category: 'arrows',
  tags: [],
  version: '0.1.0',
}

export const MoveVerticalIcon = forwardRef<SVGSVGElement, IconProps>(
  function MoveVerticalIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="M12 2v20" />
        <path d="m8 18 4 4 4-4" />
        <path d="m8 6 4-4 4 4" />
      </Icon>
    )
  },
)

MoveVerticalIcon.displayName = 'MoveVerticalIcon'
