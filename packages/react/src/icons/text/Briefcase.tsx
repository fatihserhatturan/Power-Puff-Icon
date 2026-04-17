// This file is auto-generated. Do not edit manually.
// Source: svgs/text/briefcase.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const BriefcaseMeta: IconMeta = {
  name: 'briefcase',
  category: 'text',
  tags: [],
  version: '0.1.0',
}

export const BriefcaseIcon = forwardRef<SVGSVGElement, IconProps>(
  function BriefcaseIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        <rect width="20" height="14" x="2" y="6" rx="2" />
      </Icon>
    )
  },
)

BriefcaseIcon.displayName = 'BriefcaseIcon'
