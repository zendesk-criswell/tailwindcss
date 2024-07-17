/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';

interface ITextareaProps extends HTMLAttributes<HTMLTextAreaElement> {
  placeholder?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, ITextareaProps>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={classNames(
        'pt-2 h-16 block rounded border border-grey-300 mx-5 my-3 px-3 resize-none transition-all duration-150 ease-in-out',
        'focus:border-blue-600 hover:border-blue-600 active:border-blue-600',
        'focus:outline-none focus:shadow-outline',
        'placeholder:text-grey-400',
        className
      )}
      {...props}
    />
  )
);

Textarea.displayName = 'Textarea';
