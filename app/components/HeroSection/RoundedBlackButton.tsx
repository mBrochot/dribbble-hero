import type { FC, ReactNode } from 'react';
import clsx from 'clsx';

import { handleLetterG } from 'utils';

type RoundedBlackButtonProps = {
  label: string;
};

const RoundedBlackButton: FC<RoundedBlackButtonProps> = ({
  label,
}): ReactNode => {
  return (
    <button
      className={clsx(
        'text-sm font-semibold text-white',
        'bg-custom-black hover:bg-[#565564]',
        'transition-colors duration-300',
        'px-6 py-3 rounded-full'
      )}
    >
      {handleLetterG(label)}
    </button>
  );
};

export default RoundedBlackButton;
