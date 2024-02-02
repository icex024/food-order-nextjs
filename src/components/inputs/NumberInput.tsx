import classNames from "classnames";

interface Props {
  placeholder?: string;
  setState: (cnst: number) => void;
  className?: string;
  value?: number;
  min?: string;
}

export const NumberInput: React.FC<Props> = ({
  placeholder = "",
  setState,
  className = "",
  value = 1,
  min = "1",
}) => {
  return (
    <div
      className={classNames(
        "max-w-[512px] border-[2px] rounded-2xl border-primary-second bg-white p-1",
        className
      )}
    >
      <input
        className={classNames("w-full h-full px-4 focus:outline-none")}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          setState(Number(e.target.value));
        }}
        type="number"
        min={min}
      />
    </div>
  );
};
