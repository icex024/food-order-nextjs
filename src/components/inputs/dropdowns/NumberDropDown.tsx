import classNames from "classnames";
import { FC, useState } from "react";

interface Props {
  min: number;
  max: number;
  className?: string;
  selected?: number;
  setNumber: (num: number) => void;
}

export const NumberDropDown: FC<Props> = ({
  min,
  max,
  className = "",
  selected = 0,
  setNumber,
}) => {
  let numberArray: number[] = [];
  for (let i = min; i <= max; i++) {
    numberArray.push(i);
  }
  return (
    <select
      onChange={(e) => setNumber(Number(e.target.value))}
      className="max-w-[100px] border-[2px] rounded-2xl border-primary-second bg-white p-1 w-full h-full px-4 focus:outline-none"
    >
      {numberArray.map((num, i) =>
        selected === num ? (
          <option key={i} value={num} selected>
            {num}
          </option>
        ) : (
          <option key={i} value={num}>
            {num}
          </option>
        )
      )}
    </select>
  );
};
