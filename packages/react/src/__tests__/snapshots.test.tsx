import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { HeartIcon } from '../icons/Heart'
import { StarIcon } from '../icons/Star'

describe('Icon snapshots', () => {
  it('HeartIcon default render matches snapshot', () => {
    const { container } = render(<HeartIcon />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('HeartIcon size="lg" matches snapshot', () => {
    const { container } = render(<HeartIcon size="lg" />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('HeartIcon color="red" label="Heart" matches snapshot', () => {
    const { container } = render(<HeartIcon color="red" label="Heart" />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('StarIcon default render matches snapshot', () => {
    const { container } = render(<StarIcon />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('StarIcon size="xl" color="gold" matches snapshot', () => {
    const { container } = render(<StarIcon size="xl" color="gold" />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
