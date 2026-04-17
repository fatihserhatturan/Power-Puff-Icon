// This file is auto-generated. Do not edit manually.
// Source: svgs/development/git-compare.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const GitCompareMeta: IconMeta = {
  name: 'git-compare',
  category: 'development',
  tags: [],
  version: '0.1.0',
}

export const GitCompareIcon = forwardRef<SVGSVGElement, IconProps>(
  function GitCompareIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <circle cx="18" cy="18" r="3" />
        <circle cx="6" cy="6" r="3" />
        <path d="M13 6h3a2 2 0 0 1 2 2v7" />
        <path d="M11 18H8a2 2 0 0 1-2-2V9" />
      </Icon>
    )
  },
)

GitCompareIcon.displayName = 'GitCompareIcon'
