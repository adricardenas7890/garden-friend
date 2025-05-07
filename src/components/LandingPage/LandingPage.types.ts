export interface LandingPageProps {
  animationAddress: string // Contains url for animation
  onClick: () => void // Advance to app if clicked
  animationTime: number // How long before fading out into app
  disabled: boolean
}
