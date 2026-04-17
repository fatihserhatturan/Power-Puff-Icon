// This file is auto-generated. Do not edit manually.
// Source: svgs/text/ligature.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const LigatureMeta: IconMeta = {
  name: 'ligature',
  category: 'text',
  tags: [],
  version: '0.1.0',
}

export const LigatureIcon = forwardRef<SVGSVGElement, IconProps>(function LigatureIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <path d="M14 12h2v8" />
      <path d="M14 20h4" />
      <path d="M6 12h4" />
      <path d="M6 20h4" />
      <path d="M8 20V8a4 4 0 0 1 7.464-2" />
    </Icon>
  )
})

LigatureIcon.displayName = 'LigatureIcon'
