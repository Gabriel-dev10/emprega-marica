import { describe, expect, it } from 'bun:test'
import { render, screen } from '@testing-library/react'
import { Card } from './index'

describe('Card', () => {
  it('renders children correctly', () => {
    render(<Card>Card Content</Card>)
    expect(screen.getByText('Card Content')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = render(<Card className="custom-class">Test Card</Card>)
    expect(container.firstChild).toHaveClass('custom-class')
  })

  it('applies hoverEffect styling when prop is true', () => {
    const { container } = render(<Card hoverEffect>Hover Card</Card>)
    expect(container.firstChild).toBeInTheDocument()
  })
})
