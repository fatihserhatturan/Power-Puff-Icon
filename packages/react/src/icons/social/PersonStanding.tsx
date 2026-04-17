// This file is auto-generated. Do not edit manually.
// Source: svgs/social/person-standing.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const PersonStandingMeta: IconMeta = {
  name: 'person-standing',
  category: 'social',
  tags: [],
  version: '0.1.0',
}

export const PersonStandingIcon = forwardRef<SVGSVGElement, IconProps>(
  function PersonStandingIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <circle cx="12" cy="5" r="1" />
        <path d="m9 20 3-6 3 6" />
        <path d="m6 8 6 2 6-2" />
        <path d="M12 10v4" />
      </Icon>
    )
  },
)

PersonStandingIcon.displayName = 'PersonStandingIcon'
