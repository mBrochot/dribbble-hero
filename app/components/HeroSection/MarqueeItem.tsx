import type { FC, ReactNode, CSSProperties } from 'react';
import clsx from 'clsx';

import type { Card } from 'models';
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
        'flex items-center justify-center relative',
        'w-[273px] aspect-card bg-slate-400 rounded-[32px]',
        `transition-all ease-out opacity-[--card-opacity]`,
        'duration-[600ms] delay-[--card-reveal-delay]'
      )}
    >
      {mediaType === 'image' ? (
        <img
          className="absolute inset-0 rounded-[32px] object-cover"
          src={mediaUrl}
          alt={name}
        />
      ) : (
        <video
          className="absolute inset-0 h-full rounded-[32px] object-cover"
          src={mediaUrl}
          autoPlay
          loop
          muted
        />
      )}
      <div className="flex flex-col">
        <span>{name}</span>
        <span>{title}</span>
      </div>
    </div>
  );
};

export default MarqueeItem;
