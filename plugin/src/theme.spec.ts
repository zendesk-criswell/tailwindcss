/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { DEFAULT_THEME as defaultGardenTheme } from '@zendeskgarden/react-theming';
import { getTailwindTheme } from './theme';

describe('Theme', () => {
  it('matches expected values', () => {
    expect(getTailwindTheme(defaultGardenTheme)).toMatchSnapshot();
  });
});
