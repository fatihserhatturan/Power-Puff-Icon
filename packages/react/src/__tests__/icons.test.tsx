import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { HeartIcon } from '../icons/Heart'
import { StarIcon } from '../icons/Star'

describe('HeartIcon', () => {
  it('renders without throwing', () => {
    expect(() => render(<HeartIcon />)).not.toThrow()
  })

  it('renders an svg element', () => {
    const { container } = render(<HeartIcon />)
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('has correct displayName', () => {
    expect(HeartIcon.displayName).toBe('HeartIcon')
  })

  it('renders inner path', () => {
    const { container } = render(<HeartIcon />)
    expect(container.querySelector('path')).toBeInTheDocument()
  })

  it('accepts and applies size prop', () => {
    const { container } = render(<HeartIcon size="xl" />)
    const svg = container.querySelector('svg')!
    expect(svg).toHaveAttribute('width', '32')
    expect(svg).toHaveAttribute('height', '32')
  })

  it('accepts and applies color prop', () => {
    const { container } = render(<HeartIcon color="#ff0000" />)
    expect(container.querySelector('svg')).toHaveAttribute('stroke', '#ff0000')
  })
})

describe('StarIcon', () => {
  it('renders without throwing', () => {
    expect(() => render(<StarIcon />)).not.toThrow()
  })

  it('renders an svg element', () => {
    const { container } = render(<StarIcon />)
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('has correct displayName', () => {
    expect(StarIcon.displayName).toBe('StarIcon')
  })

  it('renders inner polygon', () => {
    const { container } = render(<StarIcon />)
    expect(container.querySelector('polygon')).toBeInTheDocument()
  })

  it('accepts and applies size prop', () => {
    const { container } = render(<StarIcon size="sm" />)
    const svg = container.querySelector('svg')!
    expect(svg).toHaveAttribute('width', '16')
    expect(svg).toHaveAttribute('height', '16')
  })
})
