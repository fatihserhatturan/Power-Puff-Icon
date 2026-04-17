// This file is auto-generated. Do not edit manually.
// Source: svgs/gaming/balloon.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const BalloonMeta: IconMeta = {
  name: 'balloon',
  category: 'gaming',
  tags: [],
  version: '0.1.0',
}

export const BalloonIcon = forwardRef<SVGSVGElement, IconProps>(function BalloonIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <path d="M12 16v1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v1" />
      <path d="M12 6a2 2 0 0 1 2 2" />
      <path d="M18 8c0 4-3.5 8-6 8s-6-4-6-8a6 6 0 0 1 12 0" />
    </Icon>
  )
})

BalloonIcon.displayName = 'BalloonIcon'
