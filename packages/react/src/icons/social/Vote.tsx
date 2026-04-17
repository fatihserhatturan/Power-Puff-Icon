// This file is auto-generated. Do not edit manually.
// Source: svgs/social/vote.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const VoteMeta: IconMeta = {
  name: 'vote',
  category: 'social',
  tags: [],
  version: '0.1.0',
}

export const VoteIcon = forwardRef<SVGSVGElement, IconProps>(function VoteIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <path d="m9 12 2 2 4-4" />
      <path d="M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z" />
      <path d="M22 19H2" />
    </Icon>
  )
})

VoteIcon.displayName = 'VoteIcon'
