/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { DEFAULT_THEME } from '@zendeskgarden/react-theming';
import defaultTailwindCSSTheme from 'tailwindcss/defaultTheme';

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */

const {
  borderRadii,
  borderWidths,
  breakpoints,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  opacity,
  palette,
  shadows,
  space
} = DEFAULT_THEME;

export const theme = {
  screens: {
    sm: breakpoints.sm,
    md: breakpoints.md,
    lg: breakpoints.lg,
    xl: breakpoints.xl
  },
  colors: {
    inherit: 'inherit',
    current: 'currentColor',
    transparent: 'transparent',
    ...palette
  },
  spacing: (): any => {
    const { px, ...defaultTailwindSpacing } = defaultTailwindCSSTheme.spacing;
    const { base, xxs, xs, sm, md, lg, xl, xxl } = space;
    return {
      px,
      xxs,
      xs,
      sm,
      md,
      lg,
      xl,
      xxl,
      ...Object.fromEntries(
        Object.keys(defaultTailwindSpacing).map(n => [n, `${base * Number(n)}px`])
      )
    };
  },
  borderColor: (localTheme: any): any => ({
    ...localTheme('colors'),
    DEFAULT: localTheme('colors.grey.300', 'currentColor')
  }),
  borderRadius: {
    none: '0',
    sm: borderRadii.sm,
    DEFAULT: borderRadii.md,
    full: '9999px'
  },
  borderWidth: {
    DEFAULT: borderWidths.sm,
    0: '0',
    2: '2px',
    3: '3px',
    4: '4px',
    8: '8px'
  },
  boxShadow: (localTheme: any): any => ({
    sm: shadows.sm(localTheme('colors.grey.1200/0.16')),
    'sm-dark': shadows.sm(localTheme('colors.grey.1200/0.88')),
    DEFAULT: shadows.md(localTheme('colors.grey.1200/0.16')),
    'md-dark': shadows.md(localTheme('colors.grey.1200')),
    lg: shadows.lg('20px', '28px', localTheme('colors.grey.1200/0.16')),
    'lg-dark': shadows.lg('20px', '28px', localTheme('colors.grey.1200/0.80')),
    inner: [
      `inset ${shadows.xs(localTheme('colors.white'))}`,
      `inset ${shadows.md(localTheme('colors.blue.700'))}`
    ].join(','),
    'inner-dark': [
      `inset ${shadows.xs(localTheme('colors.grey.1100'))}`,
      `inset ${shadows.md(localTheme('colors.blue.600'))}`
    ].join(','),
    outline: [
      shadows.xs(localTheme('colors.white')),
      shadows.md(localTheme('colors.blue.700'))
    ].join(','),
    'outline-dark': [
      shadows.xs(localTheme('colors.grey.1100')),
      shadows.md(localTheme('colors.blue.600'))
    ].join(','),
    none: 'none'
  }),
  fontFamily: {
    sans: fonts.system.split(','),
    mono: fonts.mono.split(',')
  },
  fontSize: {
    xs: fontSizes.xs,
    sm: fontSizes.sm,
    base: fontSizes.md,
    lg: fontSizes.lg,
    xl: fontSizes.xl,
    '2xl': fontSizes.xxl,
    '3xl': fontSizes.xxxl
  },
  fontWeight: {
    thin: fontWeights.thin,
    extralight: fontWeights.extralight,
    light: fontWeights.light,
    normal: fontWeights.regular,
    medium: fontWeights.medium,
    semibold: fontWeights.semibold,
    bold: fontWeights.bold,
    extrabold: fontWeights.extrabold,
    black: fontWeights.black
  },
  lineHeight: {
    none: '1',
    sm: lineHeights.sm,
    md: lineHeights.md,
    lg: lineHeights.lg,
    xl: lineHeights.xl,
    '2xl': lineHeights.xxl,
    '3xl': lineHeights.xxxl
  },
  opacity: {
    0: 0,
    8: opacity[100],
    16: opacity[200],
    24: opacity[300],
    32: opacity[400],
    40: opacity[500],
    48: opacity[600],
    56: opacity[700],
    64: opacity[800],
    72: opacity[900],
    80: opacity[1000],
    88: opacity[1100],
    96: opacity[1200],
    100: 1
  }
};
