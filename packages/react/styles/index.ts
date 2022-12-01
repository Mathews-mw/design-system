import { createStitches, defaultThemeMap } from '@stitches/react'
import { colors, fonts, fontSizes, fontWeights, lineHeights, radii, space } from '@ignite-ui/tokens'

export const { styled, css, globalCss, theme, createTheme, config, keyframes } = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    with: 'space',
  },
  
  theme: {
    colors: colors,
    fontSizes: fontSizes,
    fontWeights: fontWeights,
    fonts: fonts,
    lineHeights: lineHeights,
    radii: radii,
    space: space,
  }
})
