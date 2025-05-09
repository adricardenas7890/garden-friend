import { render, screen } from '@testing-library/react'
import LandingPage from './LandingPage'

// Normally functioning parameters
const ANIMATION_TIME = 4000
const DISABLED = false

describe('Landing Page', () => {
  test('renders when disabled is false'),
    () => {
      render(<LandingPage animationAddress="" animationTime={ANIMATION_TIME} disabled={DISABLED} />)
      const animationContainer = screen.getByTestId('animation-container')
      const animationContainerWrapper = screen.getByTestId('animation-wrapper-container')
      expect(animationContainer).toBeInTheDocument()
      expect(animationContainerWrapper).toBeInTheDocument()
    }

  test('does not render when disabled is true'),
    () => {
      render(<LandingPage animationAddress="" animationTime={ANIMATION_TIME} disabled={true} />)
      const animationContainer = screen.queryByTestId('animation-container')
      const animationContainerWrapper = screen.queryAllByTestId('animation-wrapper-container')
      expect(animationContainer).toBeNull()
      expect(animationContainerWrapper).toBeNull()
    }
})
