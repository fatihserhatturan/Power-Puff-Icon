// This file is auto-generated. Do not edit manually.
// Source: svgs/text/text-cursor.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const TextCursorMeta: IconMeta = {
  name: 'text-cursor',
  category: 'text',
  tags: [],
  version: '0.1.0',
}

export const TextCursorIcon = forwardRef<SVGSVGElement, IconProps>(
  function TextCursorIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1" />
        <path d="M7 22h1a4 4 0 0 0 4-4v-1" />
        <path d="M7 2h1a4 4 0 0 1 4 4v1" />
      </Icon>
    )
  },
)

TextCursorIcon.displayName = 'TextCursorIcon'
