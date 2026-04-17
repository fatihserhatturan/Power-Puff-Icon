// This file is auto-generated. Do not edit manually.
// Source: svgs/development/non-binary.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const NonBinaryMeta: IconMeta = {
  name: 'non-binary',
  category: 'development',
  tags: [],
  version: '0.1.0',
}

export const NonBinaryIcon = forwardRef<SVGSVGElement, IconProps>(
  function NonBinaryIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="M12 2v10" />
        <path d="m8.5 4 7 4" />
        <path d="m8.5 8 7-4" />
        <circle cx="12" cy="17" r="5" />
      </Icon>
    )
  },
)

NonBinaryIcon.displayName = 'NonBinaryIcon'
