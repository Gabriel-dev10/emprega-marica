import { describe, expect, it } from 'bun:test'
import { render, screen } from '@testing-library/react'
import { Select } from './index'

const mockOptions = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
]

describe('Select', () => {
  it('renders label and options correctly', () => {
    render(<Select label="Choose" options={mockOptions} />)

    expect(screen.getByLabelText('Choose')).toBeInTheDocument()
    expect(screen.getByRole('combobox')).toBeInTheDocument()
    expect(screen.getAllByRole('option')).toHaveLength(2)
    expect(screen.getByText('Option 1')).toBeInTheDocument()
  })

  it('renders placeholder when provided', () => {
    render(<Select label="Choices" options={mockOptions} placeholder="Select an option" />)

    const placeholderOption = screen.getByText('Select an option')
    expect(placeholderOption).toBeInTheDocument()
    expect(placeholderOption).toHaveAttribute('disabled')
  })

  it('displays error message when error prop is provided', () => {
    render(<Select label="Choices" options={mockOptions} error="Invalid selection" />)
    expect(screen.getByText('Invalid selection')).toBeInTheDocument()
  })

  it('renders custom icon when provided', () => {
    render(
      <Select
        label="Choices"
        options={mockOptions}
        icon={<span data-testid="custom-icon">Icon</span>}
      />,
    )
    expect(screen.getByTestId('custom-icon')).toBeInTheDocument()
  })
})
