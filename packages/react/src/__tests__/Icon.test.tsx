import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { Icon } from '../components/Icon'

describe('Icon — rendering', () => {
  it('renders an svg element', () => {
    const { container } = render(<Icon>
      <circle cx="12" cy="12" r="10" />
    </Icon>)
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('renders children inside the svg', () => {
    const { container } = render(
      <Icon>
        <circle data-testid="inner" cx="12" cy="12" r="10" />
      </Icon>,
    )
    expect(container.querySelector('[data-testid="inner"]')).toBeInTheDocument()
  })
})

describe('Icon — size prop', () => {
  it('default size is md → 20px', () => {
    const { container } = render(<Icon><circle /></Icon>)
    const svg = container.querySelector('svg')!
    expect(svg).toHaveAttribute('width', '20')
    expect(svg).toHaveAttribute('height', '20')
  })

  it('size="xs" → 12px', () => {
    const { container } = render(<Icon size="xs"><circle /></Icon>)
    const svg = container.querySelector('svg')!
    expect(svg).toHaveAttribute('width', '12')
    expect(svg).toHaveAttribute('height', '12')
  })

  it('size="sm" → 16px', () => {
    const { container } = render(<Icon size="sm"><circle /></Icon>)
    const svg = container.querySelector('svg')!
    expect(svg).toHaveAttribute('width', '16')
    expect(svg).toHaveAttribute('height', '16')
  })

  it('size="lg" → 24px', () => {
    const { container } = render(<Icon size="lg"><circle /></Icon>)
    const svg = container.querySelector('svg')!
    expect(svg).toHaveAttribute('width', '24')
    expect(svg).toHaveAttribute('height', '24')
  })

  it('size="xl" → 32px', () => {
    const { container } = render(<Icon size="xl"><circle /></Icon>)
    const svg = container.querySelector('svg')!
    expect(svg).toHaveAttribute('width', '32')
    expect(svg).toHaveAttribute('height', '32')
  })

  it('size="2xl" → 48px', () => {
    const { container } = render(<Icon size="2xl"><circle /></Icon>)
    const svg = container.querySelector('svg')!
    expect(svg).toHaveAttribute('width', '48')
    expect(svg).toHaveAttribute('height', '48')
  })

  it('numeric size passes through', () => {
    const { container } = render(<Icon size={36}><circle /></Icon>)
    const svg = container.querySelector('svg')!
    expect(svg).toHaveAttribute('width', '36')
    expect(svg).toHaveAttribute('height', '36')
  })
})

describe('Icon — color prop', () => {
  it('default color is currentColor', () => {
    const { container } = render(<Icon><circle /></Icon>)
    expect(container.querySelector('svg')).toHaveAttribute('stroke', 'currentColor')
  })

  it('custom color is applied as stroke', () => {
    const { container } = render(<Icon color="red"><circle /></Icon>)
    expect(container.querySelector('svg')).toHaveAttribute('stroke', 'red')
  })
})

describe('Icon — strokeWidth prop', () => {
  it('default strokeWidth is 2', () => {
    const { container } = render(<Icon><circle /></Icon>)
    expect(container.querySelector('svg')).toHaveAttribute('stroke-width', '2')
  })

  it('custom strokeWidth is applied', () => {
    const { container } = render(<Icon strokeWidth={1.5}><circle /></Icon>)
    expect(container.querySelector('svg')).toHaveAttribute('stroke-width', '1.5')
  })
})

describe('Icon — className & extra props', () => {
  it('className is forwarded', () => {
    const { container } = render(<Icon className="my-icon"><circle /></Icon>)
    expect(container.querySelector('svg')).toHaveClass('my-icon')
  })

  it('extra SVG props are forwarded (data-testid)', () => {
    render(<Icon data-testid="my-svg"><circle /></Icon>)
    expect(screen.getByTestId('my-svg')).toBeInTheDocument()
  })
})

describe('Icon — ref forwarding', () => {
  it('ref attaches to the SVGSVGElement', () => {
    const ref = createRef<SVGSVGElement>()
    render(<Icon ref={ref}><circle /></Icon>)
    expect(ref.current).toBeInstanceOf(SVGSVGElement)
  })
})
