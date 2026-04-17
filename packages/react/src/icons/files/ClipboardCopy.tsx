// This file is auto-generated. Do not edit manually.
// Source: svgs/files/clipboard-copy.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const ClipboardCopyMeta: IconMeta = {
  name: 'clipboard-copy',
  category: 'files',
  tags: [],
  version: '0.1.0',
}

export const ClipboardCopyIcon = forwardRef<SVGSVGElement, IconProps>(
  function ClipboardCopyIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
        <path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
        <path d="M16 4h2a2 2 0 0 1 2 2v4" />
        <path d="M21 14H11" />
        <path d="m15 10-4 4 4 4" />
      </Icon>
    )
  },
)

ClipboardCopyIcon.displayName = 'ClipboardCopyIcon'
