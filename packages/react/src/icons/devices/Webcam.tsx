// This file is auto-generated. Do not edit manually.
// Source: svgs/devices/webcam.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const WebcamMeta: IconMeta = {
  name: 'webcam',
  category: 'devices',
  tags: [],
  version: '0.1.0',
}

export const WebcamIcon = forwardRef<SVGSVGElement, IconProps>(function WebcamIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <circle cx="12" cy="10" r="8" />
      <circle cx="12" cy="10" r="3" />
      <path d="M7 22h10" />
      <path d="M12 22v-4" />
    </Icon>
  )
})

WebcamIcon.displayName = 'WebcamIcon'
