// This file is auto-generated. Do not edit manually.
// Source: svgs/shapes/circle-slash.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const CircleSlashMeta: IconMeta = {
  name: 'circle-slash',
  category: 'shapes',
  tags: [],
  version: '0.1.0',
}

export const CircleSlashIcon = forwardRef<SVGSVGElement, IconProps>(
  function CircleSlashIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <circle cx="12" cy="12" r="10" />
        <line x1="9" x2="15" y1="15" y2="9" />
      </Icon>
    )
  },
)

CircleSlashIcon.displayName = 'CircleSlashIcon'
