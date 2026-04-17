// This file is auto-generated. Do not edit manually.
// Source: svgs/development/vector-square.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const VectorSquareMeta: IconMeta = {
  name: 'vector-square',
  category: 'development',
  tags: [],
  version: '0.1.0',
}

export const VectorSquareIcon = forwardRef<SVGSVGElement, IconProps>(
  function VectorSquareIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="M19.5 7a24 24 0 0 1 0 10" />
        <path d="M4.5 7a24 24 0 0 0 0 10" />
        <path d="M7 19.5a24 24 0 0 0 10 0" />
        <path d="M7 4.5a24 24 0 0 1 10 0" />
        <rect x="17" y="17" width="5" height="5" rx="1" />
        <rect x="17" y="2" width="5" height="5" rx="1" />
        <rect x="2" y="17" width="5" height="5" rx="1" />
        <rect x="2" y="2" width="5" height="5" rx="1" />
      </Icon>
    )
  },
)

VectorSquareIcon.displayName = 'VectorSquareIcon'
