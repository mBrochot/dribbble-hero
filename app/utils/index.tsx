import { ReactNode, Fragment } from 'react';
import clsx from 'clsx';

export const handleLetters = (words: string, textStyle?: string): ReactNode => {
  if (words.match(/a|g|ğ/)) {
    const parts = words.split(/(a|g|ğ)/);

    return (
      <>
        {parts.map((part, index) => (
          <Fragment key={index}>
            {part === 'a' || part === 'g' || part === 'ğ' ? (
              <span className={clsx('font-serif', textStyle ?? 'text-[14px]')}>
                {part}
              </span>
            ) : (
              part
            )}
          </Fragment>
        ))}
      </>
    );
  }
  return words;
};

export const getRandomBetween = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};
