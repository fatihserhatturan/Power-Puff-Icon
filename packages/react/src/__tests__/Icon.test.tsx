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

describe('Icon — new animation classes', () => {
  it('applies ppi-spin class when spin=true', () => {
    const { container } = render(<Icon spin><circle /></Icon>)
    expect(container.querySelector('svg')).toHaveClass('ppi-spin')
  })

  it('applies ppi-pulse class when pulse=true', () => {
    const { container } = render(<Icon pulse><circle /></Icon>)
    expect(container.querySelector('svg')).toHaveClass('ppi-pulse')
  })

  it('applies ppi-bounce class when bounce=true', () => {
    const { container } = render(<Icon bounce><circle /></Icon>)
    expect(container.querySelector('svg')).toHaveClass('ppi-bounce')
  })

  it('applies ppi-shake class when shake=true', () => {
    const { container } = render(<Icon shake><circle /></Icon>)
    expect(container.querySelector('svg')).toHaveClass('ppi-shake')
  })

  it('applies ppi-wiggle class when wiggle=true', () => {
    const { container } = render(<Icon wiggle><circle /></Icon>)
    expect(container.querySelector('svg')).toHaveClass('ppi-wiggle')
  })

  it('applies ppi-ping class when ping=true', () => {
    const { container } = render(<Icon ping><circle /></Icon>)
    expect(container.querySelector('svg')).toHaveClass('ppi-ping')
  })

  it('applies ppi-blink class when blink=true', () => {
    const { container } = render(<Icon blink><circle /></Icon>)
    expect(container.querySelector('svg')).toHaveClass('ppi-blink')
  })

  it('applies ppi-float class when float=true', () => {
    const { container } = render(<Icon float><circle /></Icon>)
    expect(container.querySelector('svg')).toHaveClass('ppi-float')
  })

  it('spin takes priority over bounce when both are true', () => {
    const { container } = render(<Icon spin bounce><circle /></Icon>)
    const svg = container.querySelector('svg')!
    expect(svg).toHaveClass('ppi-spin')
    expect(svg).not.toHaveClass('ppi-bounce')
  })

  it('no animation class when no animation prop is set', () => {
    const { container } = render(<Icon><circle /></Icon>)
    const svg = container.querySelector('svg')!
    expect(svg.getAttribute('class') ?? '').not.toMatch(/ppi-/)
  })
})

describe('Icon — animation fine-tuning props', () => {
  it('sets --ppi-dur custom property when duration prop is given', () => {
    const { container } = render(<Icon spin duration={300}><circle /></Icon>)
    const svg = container.querySelector('svg')!
    expect((svg as HTMLElement).style.getPropertyValue('--ppi-dur')).toBe('300ms')
  })

  it('sets --ppi-delay custom property when delay prop is given', () => {
    const { container } = render(<Icon spin delay={500}><circle /></Icon>)
    const svg = container.querySelector('svg')!
    expect((svg as HTMLElement).style.getPropertyValue('--ppi-delay')).toBe('500ms')
  })

  it('sets --ppi-count to the numeric iterationCount', () => {
    const { container } = render(<Icon spin iterationCount={3}><circle /></Icon>)
    const svg = container.querySelector('svg')!
    expect((svg as HTMLElement).style.getPropertyValue('--ppi-count')).toBe('3')
  })

  it('sets --ppi-count to infinite when iterationCount is infinite', () => {
    const { container } = render(<Icon spin iterationCount="infinite"><circle /></Icon>)
    const svg = container.querySelector('svg')!
    expect((svg as HTMLElement).style.getPropertyValue('--ppi-count')).toBe('infinite')
  })

  it('sets --ppi-ease when easing prop is given', () => {
    const { container } = render(<Icon spin easing="cubic-bezier(0.4,0,0.2,1)"><circle /></Icon>)
    const svg = container.querySelector('svg')!
    expect((svg as HTMLElement).style.getPropertyValue('--ppi-ease')).toBe('cubic-bezier(0.4,0,0.2,1)')
  })
})

describe('Icon — style enhancement props', () => {
  it('sets opacity style when opacity prop is given', () => {
    const { container } = render(<Icon opacity={0.5}><circle /></Icon>)
    const svg = container.querySelector('svg')!
    expect((svg as HTMLElement).style.opacity).toBe('0.5')
  })

  it('applies drop-shadow filter when shadow=true', () => {
    const { container } = render(<Icon shadow><circle /></Icon>)
    const svg = container.querySelector('svg')!
    expect((svg as HTMLElement).style.filter).toContain('drop-shadow')
  })

  it('composes shadow with existing style.filter', () => {
    const { container } = render(
      <Icon shadow style={{ filter: 'blur(2px)' }}><circle /></Icon>
    )
    const svg = container.querySelector('svg')!
    const filter = (svg as HTMLElement).style.filter
    expect(filter).toContain('blur(2px)')
    expect(filter).toContain('drop-shadow')
  })
})
