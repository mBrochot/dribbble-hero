import { type FC, type ReactElement } from "react";
import clsx from "clsx";

type RoundedBlackButtonProps = {
  label: string;
};

const RoundedBlackButton: FC<RoundedBlackButtonProps> = ({
  label,
}): ReactElement => {
  return (
    <button
      className={clsx(
        "text-sm font-semibold text-white",
        "bg-custom-black hover:bg-[#565564]",
        "transition-colors duration-300",
        "px-6 py-4 rounded-full"
      )}
    >
      {label}
    </button>
  );
};

export default RoundedBlackButton;
