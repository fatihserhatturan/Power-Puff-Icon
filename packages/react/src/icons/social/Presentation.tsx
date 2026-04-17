// This file is auto-generated. Do not edit manually.
// Source: svgs/social/presentation.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const PresentationMeta: IconMeta = {
  name: 'presentation',
  category: 'social',
  tags: [],
  version: '0.1.0',
}

export const PresentationIcon = forwardRef<SVGSVGElement, IconProps>(
  function PresentationIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="M2 3h20" />
        <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" />
        <path d="m7 21 5-5 5 5" />
      </Icon>
    )
  },
)

PresentationIcon.displayName = 'PresentationIcon'
