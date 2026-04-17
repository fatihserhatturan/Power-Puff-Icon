// This file is auto-generated. Do not edit manually.
// Source: svgs/media/disc.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const DiscMeta: IconMeta = {
  name: 'disc',
  category: 'media',
  tags: [],
  version: '0.1.0',
}

export const DiscIcon = forwardRef<SVGSVGElement, IconProps>(function DiscIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="2" />
    </Icon>
  )
})

DiscIcon.displayName = 'DiscIcon'
