// This file is auto-generated. Do not edit manually.
// Source: svgs/development/git-graph.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const GitGraphMeta: IconMeta = {
  name: 'git-graph',
  category: 'development',
  tags: [],
  version: '0.1.0',
}

export const GitGraphIcon = forwardRef<SVGSVGElement, IconProps>(function GitGraphIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <circle cx="5" cy="6" r="3" />
      <path d="M5 9v6" />
      <circle cx="5" cy="18" r="3" />
      <path d="M12 3v18" />
      <circle cx="19" cy="6" r="3" />
      <path d="M16 15.7A9 9 0 0 0 19 9" />
    </Icon>
  )
})

GitGraphIcon.displayName = 'GitGraphIcon'
