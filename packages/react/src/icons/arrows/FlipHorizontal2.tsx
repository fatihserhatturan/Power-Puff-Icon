// This file is auto-generated. Do not edit manually.
// Source: svgs/arrows/flip-horizontal-2.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const FlipHorizontal2Meta: IconMeta = {
  name: 'flip-horizontal-2',
  category: 'arrows',
  tags: [],
  version: '0.1.0',
}

export const FlipHorizontal2Icon = forwardRef<SVGSVGElement, IconProps>(
  function FlipHorizontal2Icon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="m3 7 5 5-5 5V7" />
        <path d="m21 7-5 5 5 5V7" />
        <path d="M12 20v2" />
        <path d="M12 14v2" />
        <path d="M12 8v2" />
        <path d="M12 2v2" />
      </Icon>
    )
  },
)

FlipHorizontal2Icon.displayName = 'FlipHorizontal2Icon'
