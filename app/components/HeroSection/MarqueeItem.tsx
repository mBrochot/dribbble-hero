import type { FC, ReactNode, CSSProperties } from 'react';
import clsx from 'clsx';

import { type Card, MediaType } from 'models';
import { getRandomBetween } from 'utils';

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
        'w-[273px] aspect-card rounded-[32px] overflow-hidden',
        `transition-all ease-out opacity-[--card-opacity]`,
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
        // get started renvoit sur mon likedin et ouvre  message
        <video
          className="relative inset-0 h-full object-cover"
          src={mediaUrl}
          autoPlay
          loop
          muted
        />
      )}
      <div
        className={clsx(
          'z-10 absolute',
          'inset-0 px-5 py-4',
          'flex flex-col justify-end',
          'space-y-3'
        )}
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0) 51.91%, rgba(0, 0, 0, 0.3) 75.88%)',
        }}
      >
        <div
          className={clsx(
            'flex flex-col',
            'font-semibold text-[13px] leading-none text-white',
            'space-y-2'
          )}
        >
          <p>{name}</p>
          <p>{title}</p>
        </div>
        <ul className="flex space-x-2">
          {tags.map((tag, index) => (
            <li
              key={index}
              className={clsx(
                'px-3 py-0.5',
                'font-semibold text-[11px] leading-5 text-white',
                'border border-white/20 rounded-full'
              )}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MarqueeItem;
