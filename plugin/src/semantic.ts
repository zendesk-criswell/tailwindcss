/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { IGardenTheme } from '@zendeskgarden/react-theming';
import { toCustomPropertyEntry } from './utils';

export function semanticTokenCSS({ theme }: { theme: IGardenTheme }) {
  function getVariables(base: 'light' | 'dark') {
    const variables = theme.colors.variables[base];
    const adjustedTheme: IGardenTheme = { ...theme, colors: { ...theme.colors, base } };

    return Object.fromEntries(
      Object.entries(variables).flatMap(groupEntry => {
        const [groupName, groupTokens] = groupEntry;
        return Object.keys(groupTokens).map(tokenKey => {
          return toCustomPropertyEntry(adjustedTheme, groupName, tokenKey);
        });
      })
    );
  }

  return {
    ':root': getVariables('light'),
    '[data-scheme="dark"]': getVariables('dark')
  };
}
