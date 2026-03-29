import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Icon } from '../components/Icon'
import { HeartIcon } from '../icons/Heart'
import { StarIcon } from '../icons/Star'

describe('Icon — accessibility (no label)', () => {
  it('is aria-hidden when no label is provided', () => {
    const { container } = render(<Icon><circle /></Icon>)
    expect(container.querySelector('svg')).toHaveAttribute('aria-hidden', 'true')
  })

  it('has no aria-label when no label is provided', () => {
    const { container } = render(<Icon><circle /></Icon>)
    expect(container.querySelector('svg')).not.toHaveAttribute('aria-label')
  })

  it('has no role when no label is provided', () => {
    const { container } = render(<Icon><circle /></Icon>)
    expect(container.querySelector('svg')).not.toHaveAttribute('role')
  })
})

describe('Icon — accessibility (with label)', () => {
  it('sets aria-label when label prop is provided', () => {
    const { container } = render(<Icon label="Heart icon"><circle /></Icon>)
    expect(container.querySelector('svg')).toHaveAttribute('aria-label', 'Heart icon')
  })

  it('sets role="img" when label prop is provided', () => {
    const { container } = render(<Icon label="Heart icon"><circle /></Icon>)
    expect(container.querySelector('svg')).toHaveAttribute('role', 'img')
  })

  it('does NOT set aria-hidden when label prop is provided', () => {
    const { container } = render(<Icon label="Heart icon"><circle /></Icon>)
    expect(container.querySelector('svg')).not.toHaveAttribute('aria-hidden')
  })
})

describe('HeartIcon — accessibility', () => {
  it('decorative by default (aria-hidden)', () => {
    const { container } = render(<HeartIcon />)
    expect(container.querySelector('svg')).toHaveAttribute('aria-hidden', 'true')
  })

  it('becomes accessible with label prop', () => {
    const { container } = render(<HeartIcon label="Favorite" />)
    const svg = container.querySelector('svg')!
    expect(svg).toHaveAttribute('aria-label', 'Favorite')
    expect(svg).toHaveAttribute('role', 'img')
    expect(svg).not.toHaveAttribute('aria-hidden')
  })
})

describe('StarIcon — accessibility', () => {
  it('decorative by default (aria-hidden)', () => {
    const { container } = render(<StarIcon />)
    expect(container.querySelector('svg')).toHaveAttribute('aria-hidden', 'true')
  })

  it('becomes accessible with label prop', () => {
    const { container } = render(<StarIcon label="Rating star" />)
    const svg = container.querySelector('svg')!
    expect(svg).toHaveAttribute('aria-label', 'Rating star')
    expect(svg).toHaveAttribute('role', 'img')
    expect(svg).not.toHaveAttribute('aria-hidden')
  })
})
