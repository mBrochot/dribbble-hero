import type { ReactNode } from 'react';
import clsx from 'clsx';

const Badge = (): ReactNode => {
  return (
    <div
      className={clsx(
        'px-4 py-2',
        'rounded-full',
        'flex justify-center items-center',
        'animate-badge hover:opacity-80 transition duration-300 ease-in-out',
        'font-serif text-base font-semibold text-center'
      )}
    >
      <a href="#">Over 3 million ready-to-work creatives!</a>
    </div>
  );
};

export default Badge;
