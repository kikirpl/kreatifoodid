import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from '../src/app/page'

describe('Home Page', () => {
  it('renders the main heading', () => {
    render(<Home />)
    
    // Check if the main heading is present
    const heading = screen.getByRole('heading', { level: 1 })
    
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent(/Supply bahan baku/i)
  })

  it('renders the Farmio logo', () => {
    render(<Home />)
    
    // The logo has alt="Farmio logo" based on page.tsx
    const logos = screen.getAllByAltText('Farmio logo')
    expect(logos.length).toBeGreaterThan(0)
    expect(logos[0]).toBeInTheDocument()
  })
})
