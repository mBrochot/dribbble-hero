import { ReactNode, Fragment } from 'react';
import clsx from 'clsx';

export const handleLetterG = (words: string, textStyle?: string): ReactNode => {
  if (words.match(/g|ğ/)) {
    const parts = words.split(/(g|ğ)/);

    return (
      <>
        {parts.map((part, index) => (
          <Fragment key={index}>
            {part === 'g' || part === 'ğ' ? (
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
