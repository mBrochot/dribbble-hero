import type { ReactNode } from 'react';
import dynamic from 'next/dynamic';

import clsx from 'clsx';
import { Navigation, SearchButton } from 'components/HeroSection';
import { handleLetters } from 'utils';
import { Logo } from 'svgs';

const LoginButton = dynamic(
  () => import('components/HeroSection/LoginButton'),
  {
    ssr: false,
  }
);

const Header = (): ReactNode => {
  return (
    <nav
      className={clsx(
        'flex justify-between items-center',
        'w-full',
        'px-4 md:px-10',
        'py-2.5 md:py-[26px]',
        'bg-custom-heroBackground',
        'sticky top-0',
        'z-20'
      )}
    >
      <div className="flex gap-x-10">
        <Logo className="w-24 h-auto xl:hidden" />
        <Navigation />
      </div>
      <Logo className="w-24 h-auto hidden xl:block" />
      <div className="flex items-center gap-6">
        <SearchButton />
        <a href="#" className="font-semibold text-sm hidden md:flex">
          {handleLetters('Log', 'text-[15px]')}&nbsp;in
        </a>
        <LoginButton />
      </div>
    </nav>
  );
};

export default Header;
