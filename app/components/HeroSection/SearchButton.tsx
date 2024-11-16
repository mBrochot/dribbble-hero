import type { ReactNode } from 'react';

import { Search } from 'svgs';

const SearchButton = (): ReactNode => {
  return (
    <button className="hidden md:flex">
      <Search className="custom-black  hover:text-[#565564] transition-colors duration-300" />
    </button>
  );
};

export default SearchButton;
