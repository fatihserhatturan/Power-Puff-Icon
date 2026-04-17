// This file is auto-generated. Do not edit manually.
// Source: svgs/text/whole-word.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const WholeWordMeta: IconMeta = {
  name: 'whole-word',
  category: 'text',
  tags: [],
  version: '0.1.0',
}

export const WholeWordIcon = forwardRef<SVGSVGElement, IconProps>(
  function WholeWordIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <circle cx="7" cy="12" r="3" />
        <path d="M10 9v6" />
        <circle cx="17" cy="12" r="3" />
        <path d="M14 7v8" />
        <path d="M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1" />
      </Icon>
    )
  },
)

WholeWordIcon.displayName = 'WholeWordIcon'
