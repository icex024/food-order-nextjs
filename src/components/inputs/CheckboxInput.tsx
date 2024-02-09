import classNames from "classnames";

interface Props {
  placeholder?: string;
  setState: (cnst: number) => void;
  className?: string;
  value?: number;
}

export const CheckboxInput: React.FC<Props> = ({
  placeholder = "",
  setState,
  className = "",
  value = 1,
}) => {
  return (
    <div className={classNames("", className)}>
      <input
        className={classNames("hover:cursor-pointer px-4 focus:outline-none")}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          setState(Number(e.target.value));
        }}
        type="checkbox"
      />
    </div>
  );
};
