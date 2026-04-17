// This file is auto-generated. Do not edit manually.
// Source: svgs/shapes/circle-chevron-up.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const CircleChevronUpMeta: IconMeta = {
  name: 'circle-chevron-up',
  category: 'shapes',
  tags: [],
  version: '0.1.0',
}

export const CircleChevronUpIcon = forwardRef<SVGSVGElement, IconProps>(
  function CircleChevronUpIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <circle cx="12" cy="12" r="10" />
        <path d="m8 14 4-4 4 4" />
      </Icon>
    )
  },
)

CircleChevronUpIcon.displayName = 'CircleChevronUpIcon'
