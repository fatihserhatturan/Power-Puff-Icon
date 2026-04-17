// This file is auto-generated. Do not edit manually.
// Source: svgs/social/smile-plus.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const SmilePlusMeta: IconMeta = {
  name: 'smile-plus',
  category: 'social',
  tags: [],
  version: '0.1.0',
}

export const SmilePlusIcon = forwardRef<SVGSVGElement, IconProps>(
  function SmilePlusIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="M22 11v1a10 10 0 1 1-9-10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" x2="9.01" y1="9" y2="9" />
        <line x1="15" x2="15.01" y1="9" y2="9" />
        <path d="M16 5h6" />
        <path d="M19 2v6" />
      </Icon>
    )
  },
)

SmilePlusIcon.displayName = 'SmilePlusIcon'
