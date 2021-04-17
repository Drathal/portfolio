import { ThemeOptions } from '@material-ui/core'

export const paletteColorsDark = {
  primary: '#b94a2c',
  secondary: '#0f4c75',
  error: '#E44C65',
  background: '#090A0F',
  text: '#bbe1fa',
  header: '#E44C65'
}

export const paletteColorsLight = {
  primary: '#b94a2c',
  secondary: '#0f4c75',
  error: '#E44C65',
  background: '#090A0F',
  text: '#bbe1fa',
  header: '#E44C65'
}

export const palette = (dark: boolean): ThemeOptions['palette'] => {
  const paletteColors = dark ? paletteColorsDark : paletteColorsLight
  return {
    type: dark ? 'dark' : 'light',
    primary: {
      main: paletteColors.primary
    },
    secondary: {
      main: paletteColors.secondary
    },
    error: {
      main: paletteColors.error
    },
    background: {
      default: paletteColors.background
    },
    text: {
      primary: paletteColors.text
    }
  }
}
