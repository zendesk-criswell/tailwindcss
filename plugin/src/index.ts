/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { DEFAULT_THEME, IGardenTheme } from '@zendeskgarden/react-theming';
import fs from 'node:fs';
import { getTailwindTheme } from './theme';
import plugin from 'tailwindcss/plugin';
import postcss from 'postcss';
import { semanticTokenCSS } from './semantic';

interface IPluginOptions {
  includeBedrock?: boolean;
  theme: IGardenTheme;
}

const DEFAULT_OPTIONS: IPluginOptions = {
  includeBedrock: true,
  theme: DEFAULT_THEME
};

export default plugin.withOptions(
  (options: IPluginOptions = DEFAULT_OPTIONS) =>
    ({ addBase }: any): void => {
      addBase(semanticTokenCSS({ theme: options.theme }));

      if (options.includeBedrock) {
        addBase(
          postcss.parse(fs.readFileSync(require.resolve('@zendeskgarden/css-bedrock'), 'utf8'))
        );
      }
    },
  (options: IPluginOptions = DEFAULT_OPTIONS) =>
    /* eslint-disable-next-line @typescript-eslint/no-unsafe-return */
    ({
      theme: getTailwindTheme(options.theme),
      corePlugins: {
        preflight: !options.includeBedrock // Disable Tailwind global resets as we provide our own
      }
    }) as any
) as (options?: IPluginOptions) => void;
