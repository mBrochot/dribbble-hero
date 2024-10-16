import type { FC, ReactNode } from 'react';
import clsx from 'clsx';

import { handleLetterG } from 'utils';

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
        'text-sm font-semibold text-white',
        'bg-custom-black hover:bg-[#565564]',
        'transition-colors duration-300',
        'px-6 py-3 rounded-full',
        [height]
      )}
    >
      {handleLetterG(label, 'text-[15px]')}
    </button>
  );
};

export default RoundedBlackButton;
