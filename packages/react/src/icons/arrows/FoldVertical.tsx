// This file is auto-generated. Do not edit manually.
// Source: svgs/arrows/fold-vertical.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const FoldVerticalMeta: IconMeta = {
  name: 'fold-vertical',
  category: 'arrows',
  tags: [],
  version: '0.1.0',
}

export const FoldVerticalIcon = forwardRef<SVGSVGElement, IconProps>(
  function FoldVerticalIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="M12 22v-6" />
        <path d="M12 8V2" />
        <path d="M4 12H2" />
        <path d="M10 12H8" />
        <path d="M16 12h-2" />
        <path d="M22 12h-2" />
        <path d="m15 19-3-3-3 3" />
        <path d="m15 5-3 3-3-3" />
      </Icon>
    )
  },
)

FoldVerticalIcon.displayName = 'FoldVerticalIcon'
