import type { ReactNode } from 'react';

import clsx from 'clsx';
import {
  Navigation,
  RoundedBlackButton,
  SearchButton,
} from 'components/HeroSection';
import { handleLetters } from 'utils';
import { Logo } from 'svgs';

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
          {handleLetters('Log in', 'text-[15px]')}
        </a>
        <RoundedBlackButton label="Sign up" height="h-12 hidden md:flex" />
        <RoundedBlackButton label="Log in" height="h-10 md:hidden" />
      </div>
    </nav>
  );
};

export default Header;
