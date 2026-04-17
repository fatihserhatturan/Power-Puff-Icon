// This file is auto-generated. Do not edit manually.
// Source: svgs/files/file-digit.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const FileDigitMeta: IconMeta = {
  name: 'file-digit',
  category: 'files',
  tags: [],
  version: '0.1.0',
}

export const FileDigitIcon = forwardRef<SVGSVGElement, IconProps>(
  function FileDigitIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="M4 12V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2" />
        <path d="M14 2v5a1 1 0 0 0 1 1h5" />
        <path d="M10 16h2v6" />
        <path d="M10 22h4" />
        <rect x="2" y="16" width="4" height="6" rx="2" />
      </Icon>
    )
  },
)

FileDigitIcon.displayName = 'FileDigitIcon'
