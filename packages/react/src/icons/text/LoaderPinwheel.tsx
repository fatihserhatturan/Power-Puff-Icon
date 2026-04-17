// This file is auto-generated. Do not edit manually.
// Source: svgs/text/loader-pinwheel.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const LoaderPinwheelMeta: IconMeta = {
  name: 'loader-pinwheel',
  category: 'text',
  tags: [],
  version: '0.1.0',
}

export const LoaderPinwheelIcon = forwardRef<SVGSVGElement, IconProps>(
  function LoaderPinwheelIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="M22 12a1 1 0 0 1-10 0 1 1 0 0 0-10 0" />
        <path d="M7 20.7a1 1 0 1 1 5-8.7 1 1 0 1 0 5-8.6" />
        <path d="M7 3.3a1 1 0 1 1 5 8.6 1 1 0 1 0 5 8.6" />
        <circle cx="12" cy="12" r="10" />
      </Icon>
    )
  },
)

LoaderPinwheelIcon.displayName = 'LoaderPinwheelIcon'
