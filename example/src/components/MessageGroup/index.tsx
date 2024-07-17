/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { ReactNode } from 'react';
import classNames from 'classnames';

type MESSAGE_TYPE = 'maker' | 'user';

export const MessageGroupContext = React.createContext<MESSAGE_TYPE>('user');

export const MessageGroup: React.FC<{
  type: MESSAGE_TYPE;
  title?: string;
  avatar?: React.ReactElement;
  children: ReactNode;
}> = ({ children, type, title, avatar }) => (
  <MessageGroupContext.Provider value={type}>
    <div
      className={classNames('flex flex-col relative', {
        'ps-9 pe-4 items-start': type === 'maker',
        'ps-4 items-end': type === 'user'
      })}
    >
      {title && <div className="text-grey-600 text-sm px-4 font-light">{title}</div>}
      {children}
      {avatar && (
        <div className="*:rounded-full *:absolute *:start-0 *:bottom-2 *:h-8 *:w-8">{avatar}</div>
      )}
    </div>
  </MessageGroupContext.Provider>
);
