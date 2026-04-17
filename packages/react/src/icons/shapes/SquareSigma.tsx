// This file is auto-generated. Do not edit manually.
// Source: svgs/shapes/square-sigma.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const SquareSigmaMeta: IconMeta = {
  name: 'square-sigma',
  category: 'shapes',
  tags: [],
  version: '0.1.0',
}

export const SquareSigmaIcon = forwardRef<SVGSVGElement, IconProps>(
  function SquareSigmaIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M16 8.9V7H8l4 5-4 5h8v-1.9" />
      </Icon>
    )
  },
)

SquareSigmaIcon.displayName = 'SquareSigmaIcon'
