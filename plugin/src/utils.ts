/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { ColorParameters, IGardenTheme, getColor } from '@zendeskgarden/react-theming';
import kebab from 'lodash.kebabcase';

export function toVar(name: string) {
  return `var(${name})`;
}

function getGardenColor(colorParameters: ColorParameters) {
  return getColor(colorParameters);
}

function mixColorWithAlphaValue(customProperty: string) {
  return `color-mix(in srgb, ${customProperty} calc(100% * <alpha-value>), transparent)`;
}

export function getCustomPropertyName(prefix: string, name: string) {
  return `--${prefix}-${kebab(name)}`;
}

export function toCustomPropertyEntry(
  theme: IGardenTheme,
  group: string,
  key: string
): [string, string] {
  return [
    getCustomPropertyName(group, key),
    getGardenColor({ theme, variable: [group, key].join('.') })
  ];
}

function getTailwindThemeEntryFromGardenVariable(group: string, key: string): [string, string] {
  return [kebab(key), mixColorWithAlphaValue(toVar(getCustomPropertyName(group, key)))];
}

export function gardenVariablesToTailwindKeys(
  theme: IGardenTheme,
  groupName: 'border' | 'foreground' | 'background' | 'shadow'
) {
  return Object.fromEntries(
    Object.keys(theme.colors.variables.light[groupName]).map(key =>
      getTailwindThemeEntryFromGardenVariable(groupName, key)
    )
  );
}
