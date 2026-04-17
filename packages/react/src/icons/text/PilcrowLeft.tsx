// This file is auto-generated. Do not edit manually.
// Source: svgs/text/pilcrow-left.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const PilcrowLeftMeta: IconMeta = {
  name: 'pilcrow-left',
  category: 'text',
  tags: [],
  version: '0.1.0',
}

export const PilcrowLeftIcon = forwardRef<SVGSVGElement, IconProps>(
  function PilcrowLeftIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="M14 3v11" />
        <path d="M14 9h-3a3 3 0 0 1 0-6h9" />
        <path d="M18 3v11" />
        <path d="M22 18H2l4-4" />
        <path d="m6 22-4-4" />
      </Icon>
    )
  },
)

PilcrowLeftIcon.displayName = 'PilcrowLeftIcon'
