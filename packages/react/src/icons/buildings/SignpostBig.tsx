// This file is auto-generated. Do not edit manually.
// Source: svgs/buildings/signpost-big.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const SignpostBigMeta: IconMeta = {
  name: 'signpost-big',
  category: 'buildings',
  tags: [],
  version: '0.1.0',
}

export const SignpostBigIcon = forwardRef<SVGSVGElement, IconProps>(
  function SignpostBigIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="M10 9H4L2 7l2-2h6" />
        <path d="M14 5h6l2 2-2 2h-6" />
        <path d="M10 22V4a2 2 0 1 1 4 0v18" />
        <path d="M8 22h8" />
      </Icon>
    )
  },
)

SignpostBigIcon.displayName = 'SignpostBigIcon'
