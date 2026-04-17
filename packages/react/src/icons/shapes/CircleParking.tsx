// This file is auto-generated. Do not edit manually.
// Source: svgs/shapes/circle-parking.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const CircleParkingMeta: IconMeta = {
  name: 'circle-parking',
  category: 'shapes',
  tags: [],
  version: '0.1.0',
}

export const CircleParkingIcon = forwardRef<SVGSVGElement, IconProps>(
  function CircleParkingIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <circle cx="12" cy="12" r="10" />
        <path d="M9 17V7h4a3 3 0 0 1 0 6H9" />
      </Icon>
    )
  },
)

CircleParkingIcon.displayName = 'CircleParkingIcon'
