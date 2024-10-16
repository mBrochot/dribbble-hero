import type { ReactNode } from 'react';
import clsx from 'clsx';

import {
  Badge,
  Header,
  Marquee,
  RoundedBlackButton,
} from 'components/HeroSection';
import { handleLetters } from 'utils';

const Hero = (): ReactNode => {
  return (
    <div className="bg-custom-heroBackground overflow-x-clip border-2 border-green-700">
      <Header />
      <div className="flex flex-col items-center pt-20 border-2 border-blue-400 +++ w-full++">
        <Badge />
        <h1
          className={clsx(
            'font-serif text-5xl md:text-7xl text-center',
            'max-w-[870px]',
            'mt-10 mb-6 px-6'
          )}
        >
          The world’s destination for design
        </h1>
        <p className="font-medium text-lg md:text-xl leading-8 md:leading-9 text-center px-8 mb-10 text-balance+++">
          {handleLetters(
            'Get inspired by the work of millions of top-rated designers & agencies around the world.',
            'text-[19px] md:text-[21px]'
          )}
        </p>
        <RoundedBlackButton label="Get started" height="h-14" />
        <Marquee className="translate-y-1/3 -mt-40" />
      </div>
    </div>
  );
};

export default Hero;
