// This file is auto-generated. Do not edit manually.
// Source: svgs/development/link-2.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const Link2Meta: IconMeta = {
  name: 'link-2',
  category: 'development',
  tags: [],
  version: '0.1.0',
}

export const Link2Icon = forwardRef<SVGSVGElement, IconProps>(function Link2Icon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <path d="M9 17H7A5 5 0 0 1 7 7h2" />
      <path d="M15 7h2a5 5 0 1 1 0 10h-2" />
      <line x1="8" x2="16" y1="12" y2="12" />
    </Icon>
  )
})

Link2Icon.displayName = 'Link2Icon'
