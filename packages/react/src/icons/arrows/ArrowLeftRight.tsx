// This file is auto-generated. Do not edit manually.
// Source: svgs/arrows/arrow-left-right.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const ArrowLeftRightMeta: IconMeta = {
  name: 'arrow-left-right',
  category: 'arrows',
  tags: [],
  version: '0.1.0',
}

export const ArrowLeftRightIcon = forwardRef<SVGSVGElement, IconProps>(
  function ArrowLeftRightIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="M8 3 4 7l4 4" />
        <path d="M4 7h16" />
        <path d="m16 21 4-4-4-4" />
        <path d="M20 17H4" />
      </Icon>
    )
  },
)

ArrowLeftRightIcon.displayName = 'ArrowLeftRightIcon'
