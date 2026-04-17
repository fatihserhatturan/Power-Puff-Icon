// This file is auto-generated. Do not edit manually.
// Source: svgs/arrows/move-3d.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const Move3dMeta: IconMeta = {
  name: 'move-3d',
  category: 'arrows',
  tags: [],
  version: '0.1.0',
}

export const Move3dIcon = forwardRef<SVGSVGElement, IconProps>(function Move3dIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <path d="M5 3v16h16" />
      <path d="m5 19 6-6" />
      <path d="m2 6 3-3 3 3" />
      <path d="m18 16 3 3-3 3" />
    </Icon>
  )
})

Move3dIcon.displayName = 'Move3dIcon'
