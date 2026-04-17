// This file is auto-generated. Do not edit manually.
// Source: svgs/development/git-compare-arrows.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const GitCompareArrowsMeta: IconMeta = {
  name: 'git-compare-arrows',
  category: 'development',
  tags: [],
  version: '0.1.0',
}

export const GitCompareArrowsIcon = forwardRef<SVGSVGElement, IconProps>(
  function GitCompareArrowsIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <circle cx="5" cy="6" r="3" />
        <path d="M12 6h5a2 2 0 0 1 2 2v7" />
        <path d="m15 9-3-3 3-3" />
        <circle cx="19" cy="18" r="3" />
        <path d="M12 18H7a2 2 0 0 1-2-2V9" />
        <path d="m9 15 3 3-3 3" />
      </Icon>
    )
  },
)

GitCompareArrowsIcon.displayName = 'GitCompareArrowsIcon'
