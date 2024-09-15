import type { ReactNode } from 'react';

export const handleLetterG = (word: string): ReactNode => {
  if (word.includes('g')) {
    const index = word.indexOf('g');
    const firstPart = word.substring(0, index);
    const secondPart = word.substring(index + 1);
    return (
      <>
        {firstPart}
        <span className="font-serif text-base">{word[index]}</span>
        {secondPart}
      </>
    );
  }
  return word;
};

export const getRandomBetween = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};
