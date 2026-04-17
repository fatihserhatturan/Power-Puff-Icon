// This file is auto-generated. Do not edit manually.
// Source: svgs/files/clipboard-clock.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const ClipboardClockMeta: IconMeta = {
  name: 'clipboard-clock',
  category: 'files',
  tags: [],
  version: '0.1.0',
}

export const ClipboardClockIcon = forwardRef<SVGSVGElement, IconProps>(
  function ClipboardClockIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="M16 14v2.2l1.6 1" />
        <path d="M16 4h2a2 2 0 0 1 2 2v.832" />
        <path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2" />
        <circle cx="16" cy="16" r="6" />
        <rect x="8" y="2" width="8" height="4" rx="1" />
      </Icon>
    )
  },
)

ClipboardClockIcon.displayName = 'ClipboardClockIcon'
