// This file is auto-generated. Do not edit manually.
// Source: svgs/arrows/chevrons-up-down.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const ChevronsUpDownMeta: IconMeta = {
  name: 'chevrons-up-down',
  category: 'arrows',
  tags: [],
  version: '0.1.0',
}

export const ChevronsUpDownIcon = forwardRef<SVGSVGElement, IconProps>(
  function ChevronsUpDownIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="m7 15 5 5 5-5" />
        <path d="m7 9 5-5 5 5" />
      </Icon>
    )
  },
)

ChevronsUpDownIcon.displayName = 'ChevronsUpDownIcon'
