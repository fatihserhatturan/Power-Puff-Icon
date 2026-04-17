// This file is auto-generated. Do not edit manually.
// Source: svgs/development/git-commit-horizontal.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const GitCommitHorizontalMeta: IconMeta = {
  name: 'git-commit-horizontal',
  category: 'development',
  tags: [],
  version: '0.1.0',
}

export const GitCommitHorizontalIcon = forwardRef<SVGSVGElement, IconProps>(
  function GitCommitHorizontalIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <circle cx="12" cy="12" r="3" />
        <line x1="3" x2="9" y1="12" y2="12" />
        <line x1="15" x2="21" y1="12" y2="12" />
      </Icon>
    )
  },
)

GitCommitHorizontalIcon.displayName = 'GitCommitHorizontalIcon'
