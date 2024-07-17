/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { ButtonHTMLAttributes, ReactNode, useContext } from 'react';
import classNames from 'classnames';

import { MessageGroupContext } from '../MessageGroup';

export const Message: React.FC<{ actions?: React.ReactElement; children: ReactNode }> = ({
  children,
  actions
}) => {
  const messageType = useContext(MessageGroupContext);

  return (
    <div
      className={classNames('py-[6px] bg-grey-200 text-grey-800 rounded-4 px-4 mb-2', {
        'self-start': messageType === 'maker',
        'self-end bg-teal-600 text-white': messageType === 'user'
      })}
    >
      {children}
      {actions && <div className="mt-2 -mb-[6px] -mx-4 z-0 p-px">{actions}</div>}
    </div>
  );
};

export const Action: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  className,
  ...other
}) => (
  <button
    className={classNames(
      className,
      'border-solid border-0 block w-full bg-white border-grey-200 text-blue-600 leading-lg p-2 transitiona-all duration-75 ease-in-out relative',
      'hover:text-blue-800 hover:bg-blue-600/10 hover:z-10 hover:outline hover:outline-blue-600',
      'last:rounded-b-4 border-b last:border-b-0 hover:outline-1 hover:outline',
      'focus-visible:z-10'
    )}
    type="button"
    {...other}
  />
);
