// This file is auto-generated. Do not edit manually.
// Source: svgs/social/copyright.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const CopyrightMeta: IconMeta = {
  name: 'copyright',
  category: 'social',
  tags: [],
  version: '0.1.0',
}

export const CopyrightIcon = forwardRef<SVGSVGElement, IconProps>(
  function CopyrightIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <circle cx="12" cy="12" r="10" />
        <path d="M14.83 14.83a4 4 0 1 1 0-5.66" />
      </Icon>
    )
  },
)

CopyrightIcon.displayName = 'CopyrightIcon'
