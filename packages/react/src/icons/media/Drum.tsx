// This file is auto-generated. Do not edit manually.
// Source: svgs/media/drum.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const DrumMeta: IconMeta = {
  name: 'drum',
  category: 'media',
  tags: [],
  version: '0.1.0',
}

export const DrumIcon = forwardRef<SVGSVGElement, IconProps>(function DrumIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <path d="m2 2 8 8" />
      <path d="m22 2-8 8" />
      <ellipse cx="12" cy="9" rx="10" ry="5" />
      <path d="M7 13.4v7.9" />
      <path d="M12 14v8" />
      <path d="M17 13.4v7.9" />
      <path d="M2 9v8a10 5 0 0 0 20 0V9" />
    </Icon>
  )
})

DrumIcon.displayName = 'DrumIcon'
