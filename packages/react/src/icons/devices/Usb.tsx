// This file is auto-generated. Do not edit manually.
// Source: svgs/devices/usb.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const UsbMeta: IconMeta = {
  name: 'usb',
  category: 'devices',
  tags: [],
  version: '0.1.0',
}

export const UsbIcon = forwardRef<SVGSVGElement, IconProps>(function UsbIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <polyline points="10 5 12 2 14 5"/>
  <line x1="12" y1="2" x2="12" y2="12"/>
  <polyline points="12 12 7 12 7 15"/>
  <polyline points="12 12 17 12 17 15"/>
  <rect x="5" y="15" width="4" height="4"/>
  <circle cx="17" cy="17" r="2"/>
    </Icon>
  )
})

UsbIcon.displayName = 'UsbIcon'
