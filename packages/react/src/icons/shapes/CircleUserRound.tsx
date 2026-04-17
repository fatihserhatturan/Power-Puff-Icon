// This file is auto-generated. Do not edit manually.
// Source: svgs/shapes/circle-user-round.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const CircleUserRoundMeta: IconMeta = {
  name: 'circle-user-round',
  category: 'shapes',
  tags: [],
  version: '0.1.0',
}

export const CircleUserRoundIcon = forwardRef<SVGSVGElement, IconProps>(
  function CircleUserRoundIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="M17.925 20.056a6 6 0 0 0-11.851.001" />
        <circle cx="12" cy="11" r="4" />
        <circle cx="12" cy="12" r="10" />
      </Icon>
    )
  },
)

CircleUserRoundIcon.displayName = 'CircleUserRoundIcon'
