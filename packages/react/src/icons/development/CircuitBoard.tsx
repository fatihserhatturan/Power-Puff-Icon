// This file is auto-generated. Do not edit manually.
// Source: svgs/development/circuit-board.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const CircuitBoardMeta: IconMeta = {
  name: 'circuit-board',
  category: 'development',
  tags: [],
  version: '0.1.0',
}

export const CircuitBoardIcon = forwardRef<SVGSVGElement, IconProps>(
  function CircuitBoardIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M11 9h4a2 2 0 0 0 2-2V3" />
        <circle cx="9" cy="9" r="2" />
        <path d="M7 21v-4a2 2 0 0 1 2-2h4" />
        <circle cx="15" cy="15" r="2" />
      </Icon>
    )
  },
)

CircuitBoardIcon.displayName = 'CircuitBoardIcon'
