// This file is auto-generated. Do not edit manually.
// Source: svgs/arrows/fold-horizontal.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const FoldHorizontalMeta: IconMeta = {
  name: 'fold-horizontal',
  category: 'arrows',
  tags: [],
  version: '0.1.0',
}

export const FoldHorizontalIcon = forwardRef<SVGSVGElement, IconProps>(
  function FoldHorizontalIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="M2 12h6" />
        <path d="M22 12h-6" />
        <path d="M12 2v2" />
        <path d="M12 8v2" />
        <path d="M12 14v2" />
        <path d="M12 20v2" />
        <path d="m19 9-3 3 3 3" />
        <path d="m5 15 3-3-3-3" />
      </Icon>
    )
  },
)

FoldHorizontalIcon.displayName = 'FoldHorizontalIcon'
