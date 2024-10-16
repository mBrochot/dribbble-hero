import type { ReactNode } from 'react';

import { handleLetters } from 'utils';

const Navigation = (): ReactNode => {
  const links = ['Find designers', 'Inspiration', 'Jobs', 'Go Pro'];

  return (
    <ul className="text-sm font-semibold hidden space-x-8 md:flex items-center">
      {links.map((link, index) => (
        <li key={index}>{handleLetters(link, 'text-[15px]')}</li>
      ))}
    </ul>
  );
};

export default Navigation;
