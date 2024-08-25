import type { ComponentProps, ReactNode } from 'react';
import clsx from 'clsx';

import { cards } from 'data';

const Marquee = ({ className }: ComponentProps<'section'>): ReactNode => {
  return (
    <section className={clsx('w-full', className)}>
      <div
        className={clsx(
          'py-[72px]',
          'grid grid-flow-col auto-cols-min',
          'gap-[--card-gap]',
          'animate-slide',
          'border-2 min-w-fit'
        )}
      >
        {[...cards, ...cards].map((item, index) => {
          return (
            <div
              key={index}
              className={clsx(
                'w-[273px] aspect-card bg-slate-400 rounded-[32px]',
                'flex items-center justify-center'
              )}
            >
              {item}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Marquee;
