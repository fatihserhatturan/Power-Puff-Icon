// This file is auto-generated. Do not edit manually.
// Source: svgs/ui/frame.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const FrameMeta: IconMeta = {
  name: 'frame',
  category: 'ui',
  tags: [],
  version: '0.1.0',
}

export const FrameIcon = forwardRef<SVGSVGElement, IconProps>(function FrameIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <line x1="22" x2="2" y1="6" y2="6" />
      <line x1="22" x2="2" y1="18" y2="18" />
      <line x1="6" x2="6" y1="2" y2="22" />
      <line x1="18" x2="18" y1="2" y2="22" />
    </Icon>
  )
})

FrameIcon.displayName = 'FrameIcon'
