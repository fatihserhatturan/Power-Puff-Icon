// This file is auto-generated. Do not edit manually.
// Source: svgs/arrows/send-to-back.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const SendToBackMeta: IconMeta = {
  name: 'send-to-back',
  category: 'arrows',
  tags: [],
  version: '0.1.0',
}

export const SendToBackIcon = forwardRef<SVGSVGElement, IconProps>(
  function SendToBackIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <rect x="14" y="14" width="8" height="8" rx="2" />
        <rect x="2" y="2" width="8" height="8" rx="2" />
        <path d="M7 14v1a2 2 0 0 0 2 2h1" />
        <path d="M14 7h1a2 2 0 0 1 2 2v1" />
      </Icon>
    )
  },
)

SendToBackIcon.displayName = 'SendToBackIcon'
