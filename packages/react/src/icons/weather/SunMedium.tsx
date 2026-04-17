// This file is auto-generated. Do not edit manually.
// Source: svgs/weather/sun-medium.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const SunMediumMeta: IconMeta = {
  name: 'sun-medium',
  category: 'weather',
  tags: [],
  version: '0.1.0',
}

export const SunMediumIcon = forwardRef<SVGSVGElement, IconProps>(
  function SunMediumIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 3v1" />
        <path d="M12 20v1" />
        <path d="M3 12h1" />
        <path d="M20 12h1" />
        <path d="m18.364 5.636-.707.707" />
        <path d="m6.343 17.657-.707.707" />
        <path d="m5.636 5.636.707.707" />
        <path d="m17.657 17.657.707.707" />
      </Icon>
    )
  },
)

SunMediumIcon.displayName = 'SunMediumIcon'
