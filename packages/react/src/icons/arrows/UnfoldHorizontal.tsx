// This file is auto-generated. Do not edit manually.
// Source: svgs/arrows/unfold-horizontal.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const UnfoldHorizontalMeta: IconMeta = {
  name: 'unfold-horizontal',
  category: 'arrows',
  tags: [],
  version: '0.1.0',
}

export const UnfoldHorizontalIcon = forwardRef<SVGSVGElement, IconProps>(
  function UnfoldHorizontalIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="M16 12h6" />
        <path d="M8 12H2" />
        <path d="M12 2v2" />
        <path d="M12 8v2" />
        <path d="M12 14v2" />
        <path d="M12 20v2" />
        <path d="m19 15 3-3-3-3" />
        <path d="m5 9-3 3 3 3" />
      </Icon>
    )
  },
)

UnfoldHorizontalIcon.displayName = 'UnfoldHorizontalIcon'
