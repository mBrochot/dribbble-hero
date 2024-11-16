import type { FC, ReactNode, CSSProperties } from 'react';
import clsx from 'clsx';

import { type Card, MediaType } from 'models';
import { getRandomBetween, handleLetters } from 'utils';

type MarqueeItemProps = {
  isDisplayed?: boolean;
} & Card;

const MarqueeItem: FC<MarqueeItemProps> = ({
  isDisplayed,
  mediaType,
  mediaUrl,
  name,
  tags,
  title,
}): ReactNode => {
  const revealDelay = getRandomBetween(0, 1);

  return (
    <div
      style={
        {
          '--card-reveal-delay': `${revealDelay}s`,
          '--card-opacity': isDisplayed ? 1 : 0,
          transform: isDisplayed
            ? 'perspective(300px) translate3d(0, 0, 0)'
            : 'perspective(300px) translate3d(0, 0, 16px)',
        } as CSSProperties
      }
      className={clsx(
        'relative',
        'flex items-center justify-center',
        'w-[218px] md:w-[273px] aspect-cardMobile md:aspect-cardDesktop',
        'rounded-[32px] overflow-hidden',
        'transition-all ease-out opacity-[--card-opacity]',
        'duration-[600ms] delay-[--card-reveal-delay]'
      )}
    >
      {mediaType === MediaType.IMAGE ? (
        <img
          className="relative inset-0 object-cover"
          src={mediaUrl}
          alt={name}
        />
      ) : (
        <video
          className="relative inset-0 h-full object-cover"
          src={mediaUrl}
          autoPlay
          loop
          muted
        />
      )}
      <div
        style={
          {
            backgroundImage:
              'linear-gradient(rgba(0, 0, 0, 0) 51.91%, rgba(0, 0, 0, 0.3) 75.88%)',
            '--info-reveal-delay': `${revealDelay + 0.3}s`,
            '--info-opacity': isDisplayed ? 1 : 0,
            transform: isDisplayed
              ? 'perspective(300px) translate3d(0, 0, 0)'
              : 'perspective(300px) translate3d(0, 0, 16px)',
          } as CSSProperties
        }
        className={clsx(
          'z-10 absolute',
          'inset-0 px-4 md:px-5 py-3 md:py-4',
          'flex flex-col justify-end',
          'space-y-3',
          'transition-all ease-out opacity-[--info-opacity]',
          'duration-1000 delay-[--info-reveal-delay]'
        )}
      >
        <div
          className={clsx(
            'flex flex-col',
            'font-semibold text-[13px] leading-none text-white',
            'space-y-2'
          )}
        >
          <p>{handleLetters(name)}</p>
          <p>{handleLetters(title)}</p>
        </div>
        <ul className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <li
              key={index}
              className={clsx(
                'px-[9px] md:px-3 py-0.5',
                'font-semibold text-[11px] leading-5 text-white',
                'border border-white/20 rounded-full',
                'shrink-0'
              )}
            >
              {handleLetters(tag, 'text-[12px]')}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MarqueeItem;
