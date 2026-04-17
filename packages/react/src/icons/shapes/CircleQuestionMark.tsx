// This file is auto-generated. Do not edit manually.
// Source: svgs/shapes/circle-question-mark.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const CircleQuestionMarkMeta: IconMeta = {
  name: 'circle-question-mark',
  category: 'shapes',
  tags: [],
  version: '0.1.0',
}

export const CircleQuestionMarkIcon = forwardRef<SVGSVGElement, IconProps>(
  function CircleQuestionMarkIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <path d="M12 17h.01" />
      </Icon>
    )
  },
)

CircleQuestionMarkIcon.displayName = 'CircleQuestionMarkIcon'
