/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { gardenVariablesToTailwindKeys, getCustomPropertyName, toVar } from './utils';
import { IGardenTheme } from '@zendeskgarden/react-theming';
import defaultTailwindTheme from 'tailwindcss/defaultTheme';

export function getTailwindTheme(theme: IGardenTheme) {
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
  } = theme;

  const colors = {
    inherit: 'inherit',
    current: 'currentColor',
    transparent: 'transparent',
    ...palette
  };

  return {
    screens: {
      sm: breakpoints.sm,
      md: breakpoints.md,
      lg: breakpoints.lg,
      xl: breakpoints.xl
    },

    colors,

    spacing: {
      px: '1px',
      xxs: space.xxs,
      xs: space.xs,
      sm: space.sm,
      md: space.md,
      lg: space.lg,
      xl: space.xl,
      xxl: space.xxl,
      ...Object.fromEntries(
        Object.keys(defaultTailwindTheme.spacing)
          .filter(key => key !== 'px')
          .map(n => [n, `${space.base * Number(n)}px`])
      )
    },
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
    boxShadow: {
      sm: shadows.sm(toVar(getCustomPropertyName('shadow', 'small'))),
      DEFAULT: shadows.md(toVar(getCustomPropertyName('shadow', 'medium'))),
      lg: shadows.lg('20px', '28px', toVar(getCustomPropertyName('shadow', 'large'))),
      inner: [
        `inset ${shadows.xs(toVar(getCustomPropertyName('border', 'default')))}`,
        `inset ${shadows.md(toVar(getCustomPropertyName('border', 'primaryEmphasis')))}`
      ].join(','),
      outline: [
        shadows.xs(toVar(getCustomPropertyName('border', 'default'))),
        shadows.md(toVar(getCustomPropertyName('border', 'primaryEmphasis')))
      ].join(','),
      none: 'none'
    },
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
    },

    extend: {
      backgroundColor: gardenVariablesToTailwindKeys(theme, 'background'),
      ringOffsetColor: gardenVariablesToTailwindKeys(theme, 'background'),

      borderColor: gardenVariablesToTailwindKeys(theme, 'border'),
      outlineColor: gardenVariablesToTailwindKeys(theme, 'border'),
      ringColor: gardenVariablesToTailwindKeys(theme, 'border'),
      divideColor: gardenVariablesToTailwindKeys(theme, 'border'),

      textColor: gardenVariablesToTailwindKeys(theme, 'foreground'),
      placeholderColor: gardenVariablesToTailwindKeys(theme, 'foreground'),

      boxShadow: gardenVariablesToTailwindKeys(theme, 'shadow')
    }
  };
}
