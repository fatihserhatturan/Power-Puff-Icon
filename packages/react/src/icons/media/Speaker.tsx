// This file is auto-generated. Do not edit manually.
// Source: svgs/media/speaker.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const SpeakerMeta: IconMeta = {
  name: 'speaker',
  category: 'media',
  tags: [],
  version: '0.1.0',
}

export const SpeakerIcon = forwardRef<SVGSVGElement, IconProps>(function SpeakerIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <rect width="16" height="20" x="4" y="2" rx="2" />
      <path d="M12 6h.01" />
      <circle cx="12" cy="14" r="4" />
      <path d="M12 14h.01" />
    </Icon>
  )
})

SpeakerIcon.displayName = 'SpeakerIcon'
