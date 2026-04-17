// This file is auto-generated. Do not edit manually.
// Source: svgs/development/git-branch-minus.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const GitBranchMinusMeta: IconMeta = {
  name: 'git-branch-minus',
  category: 'development',
  tags: [],
  version: '0.1.0',
}

export const GitBranchMinusIcon = forwardRef<SVGSVGElement, IconProps>(
  function GitBranchMinusIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="M15 6a9 9 0 0 0-9 9V3" />
        <path d="M21 18h-6" />
        <circle cx="18" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
      </Icon>
    )
  },
)

GitBranchMinusIcon.displayName = 'GitBranchMinusIcon'
