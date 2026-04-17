// This file is auto-generated. Do not edit manually.
// Source: svgs/arrows/move-up-left.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const MoveUpLeftMeta: IconMeta = {
  name: 'move-up-left',
  category: 'arrows',
  tags: [],
  version: '0.1.0',
}

export const MoveUpLeftIcon = forwardRef<SVGSVGElement, IconProps>(
  function MoveUpLeftIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="M5 11V5H11" />
        <path d="M5 5L19 19" />
      </Icon>
    )
  },
)

MoveUpLeftIcon.displayName = 'MoveUpLeftIcon'
