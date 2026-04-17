// This file is auto-generated. Do not edit manually.
// Source: svgs/devices/switch-camera.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const SwitchCameraMeta: IconMeta = {
  name: 'switch-camera',
  category: 'devices',
  tags: [],
  version: '0.1.0',
}

export const SwitchCameraIcon = forwardRef<SVGSVGElement, IconProps>(
  function SwitchCameraIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="M11 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5" />
        <path d="M13 5h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5" />
        <circle cx="12" cy="12" r="3" />
        <path d="m18 22-3-3 3-3" />
        <path d="m6 2 3 3-3 3" />
      </Icon>
    )
  },
)

SwitchCameraIcon.displayName = 'SwitchCameraIcon'
