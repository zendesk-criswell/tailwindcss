/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { ReactNode } from 'react';
import WordmarkZendesk from '@zendeskgarden/svg-icons/src/26/wordmark-zendesk.svg?react';

export const Widget: React.FC<{ title: string; children: ReactNode }> = ({ children, title }) => (
  <div className="max-w-sm mx-auto shadow-lg rounded-2 flex flex-col">
    <div className="bg-teal-600 text-white font-semibold py-2 text-center rounded-t-2">{title}</div>
    <div className="flex flex-col flex-grow">
      {children}
      <WordmarkZendesk className="w-[54px] h-4 block text-grey-500 ms-5 mb-3" role="presentation" />
    </div>
  </div>
);
