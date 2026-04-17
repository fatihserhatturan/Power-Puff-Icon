// This file is auto-generated. Do not edit manually.
// Source: svgs/files/copy-check.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const CopyCheckMeta: IconMeta = {
  name: 'copy-check',
  category: 'files',
  tags: [],
  version: '0.1.0',
}

export const CopyCheckIcon = forwardRef<SVGSVGElement, IconProps>(
  function CopyCheckIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="m12 15 2 2 4-4" />
        <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
      </Icon>
    )
  },
)

CopyCheckIcon.displayName = 'CopyCheckIcon'
