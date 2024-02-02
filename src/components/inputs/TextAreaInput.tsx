import classNames from "classnames";
import { Dispatch, SetStateAction } from "react";

interface Props {
  placeholder?: string;
  setState: (cnst: string) => void;
  className?: string;
  password?: boolean;
}

export const TextAreaInput: React.FC<Props> = ({
  placeholder = "",
  setState,
  className = "",
  password = false,
}) => {
  return (
    <div
      className={classNames(
        "max-w-[512px] border-[2px] rounded-2xl border-primary-second bg-white p-1",
        className
      )}
    >
      <textarea
        className={classNames(
          "w-full h-full px-4 focus:outline-none resize-none"
        )}
        placeholder={placeholder}
        onChange={(e) => {
          setState(e.target.value);
        }}
      />
    </div>
  );
};
