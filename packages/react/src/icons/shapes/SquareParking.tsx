// This file is auto-generated. Do not edit manually.
// Source: svgs/shapes/square-parking.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const SquareParkingMeta: IconMeta = {
  name: 'square-parking',
  category: 'shapes',
  tags: [],
  version: '0.1.0',
}

export const SquareParkingIcon = forwardRef<SVGSVGElement, IconProps>(
  function SquareParkingIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M9 17V7h4a3 3 0 0 1 0 6H9" />
      </Icon>
    )
  },
)

SquareParkingIcon.displayName = 'SquareParkingIcon'
