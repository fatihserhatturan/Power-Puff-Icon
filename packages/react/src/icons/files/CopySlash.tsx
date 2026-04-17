// This file is auto-generated. Do not edit manually.
// Source: svgs/files/copy-slash.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const CopySlashMeta: IconMeta = {
  name: 'copy-slash',
  category: 'files',
  tags: [],
  version: '0.1.0',
}

export const CopySlashIcon = forwardRef<SVGSVGElement, IconProps>(
  function CopySlashIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <line x1="12" x2="18" y1="18" y2="12" />
        <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
      </Icon>
    )
  },
)

CopySlashIcon.displayName = 'CopySlashIcon'
