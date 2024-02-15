import classNames from "classnames";
import { FC, useState } from "react";

interface Props {
  className?: string;
  selected?: string;
  setValue: (value: string) => void;
  valueArray: string[];
}

export const StringDropDown: FC<Props> = ({
  className = "",
  selected = 0,
  setValue,
  valueArray,
}) => {
  return (
    <select
      onChange={(e) => setValue(e.target.value)}
      className="max-w-[300px] border-[2px] rounded-2xl border-primary-second bg-white p-1 w-full h-full px-4 focus:outline-none"
    >
      {valueArray.map((value, i) =>
        selected === value ? (
          <option key={i} value={value} selected>
            {value}
          </option>
        ) : (
          <option key={i} value={value}>
            {value}
          </option>
        )
      )}
    </select>
  );
};
