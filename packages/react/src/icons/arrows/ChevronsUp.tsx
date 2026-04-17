// This file is auto-generated. Do not edit manually.
// Source: svgs/arrows/chevrons-up.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const ChevronsUpMeta: IconMeta = {
  name: 'chevrons-up',
  category: 'arrows',
  tags: [],
  version: '0.1.0',
}

export const ChevronsUpIcon = forwardRef<SVGSVGElement, IconProps>(
  function ChevronsUpIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="m17 11-5-5-5 5" />
        <path d="m17 18-5-5-5 5" />
      </Icon>
    )
  },
)

ChevronsUpIcon.displayName = 'ChevronsUpIcon'
