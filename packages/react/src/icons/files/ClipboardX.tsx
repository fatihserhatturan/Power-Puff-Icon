// This file is auto-generated. Do not edit manually.
// Source: svgs/files/clipboard-x.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const ClipboardXMeta: IconMeta = {
  name: 'clipboard-x',
  category: 'files',
  tags: [],
  version: '0.1.0',
}

export const ClipboardXIcon = forwardRef<SVGSVGElement, IconProps>(
  function ClipboardXIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <path d="m15 11-6 6" />
        <path d="m9 11 6 6" />
      </Icon>
    )
  },
)

ClipboardXIcon.displayName = 'ClipboardXIcon'
