// This file is auto-generated. Do not edit manually.
// Source: svgs/shapes/circle-user.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const CircleUserMeta: IconMeta = {
  name: 'circle-user',
  category: 'shapes',
  tags: [],
  version: '0.1.0',
}

export const CircleUserIcon = forwardRef<SVGSVGElement, IconProps>(
  function CircleUserIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="10" r="3" />
        <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
      </Icon>
    )
  },
)

CircleUserIcon.displayName = 'CircleUserIcon'
