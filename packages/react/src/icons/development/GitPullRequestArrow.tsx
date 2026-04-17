// This file is auto-generated. Do not edit manually.
// Source: svgs/development/git-pull-request-arrow.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const GitPullRequestArrowMeta: IconMeta = {
  name: 'git-pull-request-arrow',
  category: 'development',
  tags: [],
  version: '0.1.0',
}

export const GitPullRequestArrowIcon = forwardRef<SVGSVGElement, IconProps>(
  function GitPullRequestArrowIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <circle cx="5" cy="6" r="3" />
        <path d="M5 9v12" />
        <circle cx="19" cy="18" r="3" />
        <path d="m15 9-3-3 3-3" />
        <path d="M12 6h5a2 2 0 0 1 2 2v7" />
      </Icon>
    )
  },
)

GitPullRequestArrowIcon.displayName = 'GitPullRequestArrowIcon'
