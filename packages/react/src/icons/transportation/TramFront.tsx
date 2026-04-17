// This file is auto-generated. Do not edit manually.
// Source: svgs/transportation/tram-front.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const TramFrontMeta: IconMeta = {
  name: 'tram-front',
  category: 'transportation',
  tags: [],
  version: '0.1.0',
}

export const TramFrontIcon = forwardRef<SVGSVGElement, IconProps>(
  function TramFrontIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <rect width="16" height="16" x="4" y="3" rx="2" />
        <path d="M4 11h16" />
        <path d="M12 3v8" />
        <path d="m8 19-2 3" />
        <path d="m18 22-2-3" />
        <path d="M8 15h.01" />
        <path d="M16 15h.01" />
      </Icon>
    )
  },
)

TramFrontIcon.displayName = 'TramFrontIcon'
