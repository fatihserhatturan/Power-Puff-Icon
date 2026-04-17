// This file is auto-generated. Do not edit manually.
// Source: svgs/shapes/circle-slash-2.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const CircleSlash2Meta: IconMeta = {
  name: 'circle-slash-2',
  category: 'shapes',
  tags: [],
  version: '0.1.0',
}

export const CircleSlash2Icon = forwardRef<SVGSVGElement, IconProps>(
  function CircleSlash2Icon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <circle cx="12" cy="12" r="10" />
        <path d="M22 2 2 22" />
      </Icon>
    )
  },
)

CircleSlash2Icon.displayName = 'CircleSlash2Icon'
