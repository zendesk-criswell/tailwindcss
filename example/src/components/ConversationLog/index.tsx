/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { ReactNode, useLayoutEffect, useRef } from 'react';

export const ConversationLog: React.FC<{ children: ReactNode }> = ({ children }) => {
  const logRef = useRef<HTMLDivElement>(null);

  /** Scroll to bottom of log on first render */
  useLayoutEffect(() => {
    if (logRef.current) {
      logRef.current.scrollTop = logRef.current.scrollHeight;
    }
  }, []);

  return (
    <div
      className="max-h-[385px] flex-grow overflow-y-auto px-5 pt-3 overscroll-contain"
      ref={logRef}
    >
      {children}
    </div>
  );
};
