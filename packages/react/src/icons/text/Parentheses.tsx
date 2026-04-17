// This file is auto-generated. Do not edit manually.
// Source: svgs/text/parentheses.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const ParenthesesMeta: IconMeta = {
  name: 'parentheses',
  category: 'text',
  tags: [],
  version: '0.1.0',
}

export const ParenthesesIcon = forwardRef<SVGSVGElement, IconProps>(
  function ParenthesesIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="M8 21s-4-3-4-9 4-9 4-9" />
        <path d="M16 3s4 3 4 9-4 9-4 9" />
      </Icon>
    )
  },
)

ParenthesesIcon.displayName = 'ParenthesesIcon'
