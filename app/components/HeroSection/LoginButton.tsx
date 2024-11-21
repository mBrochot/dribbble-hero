'use client';

import { type ReactNode } from 'react';

import { RoundedBlackButton } from 'components/HeroSection';
import { type DeviceType, useDevice } from 'hooks/useDevice';

const LoginButton = (): ReactNode => {
  const isDesktop = useDevice() === ('desktop' as DeviceType);

  return (
    <RoundedBlackButton
      label={isDesktop ? 'Sign up' : 'Log in'}
      height="h-10 md:h-12"
    />
  );
};

export default LoginButton;
