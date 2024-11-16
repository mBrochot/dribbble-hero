import type { FC, ReactNode } from 'react';
import clsx from 'clsx';

import { handleLetters } from 'utils';

type RoundedBlackButtonProps = {
  label: string;
  height?: string;
};

const RoundedBlackButton: FC<RoundedBlackButtonProps> = ({
  label,
  height,
}): ReactNode => {
  return (
    <button
      className={clsx(
        'flex items-center',
        'text-sm font-semibold text-white',
        'bg-custom-black hover:bg-[#565564]',
        'transition-colors duration-300',
        'px-6 py-3 rounded-full',
        'shrink-0',
        [height]
      )}
    >
      <span>{handleLetters(label, 'text-[15px]')}</span>
    </button>
  );
};

export default RoundedBlackButton;
