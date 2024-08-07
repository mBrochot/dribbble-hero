import { type ReactElement } from "react";

import {
  Navigation,
  RoundedBlackButton,
  SearchInput,
} from "components/HeroSection";
import { Logo } from "svgs";

const Header = (): ReactElement => {
  return (
    <nav className="px-10 py-8 flex justify-between items-center">
      <div className="flex gap-x-10">
        <Logo className="w-24 h-auto xl:hidden" />
        <Navigation />
      </div>
      <Logo className="w-24 h-auto hidden xl:block" />
      <div className="border flex items-center gap-6">
        <SearchInput />
        <a href="#" className="font-semibold text-sm">
          Lo<span className="font-serif text-base">g</span> in
        </a>
        <RoundedBlackButton label="Sign up" />
      </div>
    </nav>
  );
};

export default Header;
