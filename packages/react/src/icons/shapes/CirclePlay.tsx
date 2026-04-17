// This file is auto-generated. Do not edit manually.
// Source: svgs/shapes/circle-play.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const CirclePlayMeta: IconMeta = {
  name: 'circle-play',
  category: 'shapes',
  tags: [],
  version: '0.1.0',
}

export const CirclePlayIcon = forwardRef<SVGSVGElement, IconProps>(
  function CirclePlayIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z" />
        <circle cx="12" cy="12" r="10" />
      </Icon>
    )
  },
)

CirclePlayIcon.displayName = 'CirclePlayIcon'
