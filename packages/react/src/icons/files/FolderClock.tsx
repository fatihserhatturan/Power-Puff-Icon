// This file is auto-generated. Do not edit manually.
// Source: svgs/files/folder-clock.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const FolderClockMeta: IconMeta = {
  name: 'folder-clock',
  category: 'files',
  tags: [],
  version: '0.1.0',
}

export const FolderClockIcon = forwardRef<SVGSVGElement, IconProps>(
  function FolderClockIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="M16 14v2.2l1.6 1" />
        <path d="M7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2" />
        <circle cx="16" cy="16" r="6" />
      </Icon>
    )
  },
)

FolderClockIcon.displayName = 'FolderClockIcon'
