import type { ReactNode } from 'react';

import {
  Navigation,
  RoundedBlackButton,
  SearchButton,
} from 'components/HeroSection';
import { handleLetters } from 'utils';
import { Logo } from 'svgs';

const Header = (): ReactNode => {
  return (
    <nav className="px-10 py-[26px] flex justify-between items-center">
      <div className="flex gap-x-10">
        <Logo className="w-24 h-auto xl:hidden" />
        <Navigation />
      </div>
      <Logo className="w-24 h-auto hidden xl:block" />
      <div className="flex items-center gap-6">
        <SearchButton />
        <a href="#" className="font-semibold text-sm">
          {handleLetters('Log in', 'text-[15px]')}
        </a>
        <RoundedBlackButton label="Sign up" height="h-12" />
      </div>
    </nav>
  );
};

export default Header;
