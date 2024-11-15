'use client';

import {
  type ComponentProps,
  type ReactNode,
  useState,
  useEffect,
} from 'react';
import clsx from 'clsx';

import { MarqueeItem } from '.';
import { cards } from 'data';

const Marquee = ({ className }: ComponentProps<'section'>): ReactNode => {
  const [isDisplayed, setIsDisplayed] = useState<boolean>(false);

  useEffect(() => {
    setIsDisplayed(true);
  }, []);

  return (
    <section className={clsx('w-full', className)}>
      <div
        className={clsx(
          'py-[72px]',
          'grid grid-flow-col auto-cols-min',
          'gap-[--card-gap]',
          'animate-slide',
          'min-w-fit'
        )}
      >
        {[...cards, ...cards].map((props, index) => {
          return (
            <MarqueeItem
              key={props.name + index}
              isDisplayed={isDisplayed}
              {...props}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Marquee;
