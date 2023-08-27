'use client';

import { useEffect } from 'react';
import Hotjar from '@hotjar/browser';

export const HotjarInit = () => {
  useEffect(() => {
    const siteId = 3629146;
    const hotjarVersion = 6;

    Hotjar.init(siteId, hotjarVersion);
  }, []);

  return null;
};