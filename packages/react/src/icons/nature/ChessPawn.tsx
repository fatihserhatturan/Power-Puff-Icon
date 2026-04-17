// This file is auto-generated. Do not edit manually.
// Source: svgs/nature/chess-pawn.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const ChessPawnMeta: IconMeta = {
  name: 'chess-pawn',
  category: 'nature',
  tags: [],
  version: '0.1.0',
}

export const ChessPawnIcon = forwardRef<SVGSVGElement, IconProps>(
  function ChessPawnIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z" />
        <path d="m14.5 10 1.5 8" />
        <path d="M7 10h10" />
        <path d="m8 18 1.5-8" />
        <circle cx="12" cy="6" r="4" />
      </Icon>
    )
  },
)

ChessPawnIcon.displayName = 'ChessPawnIcon'
