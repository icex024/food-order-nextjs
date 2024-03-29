import classNames from "classnames";
import { ReactNode } from "react";

interface Props {
  color: "primary" | "white" | "red" | "primary-fourth" | "disabled";
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const RegularButton: React.FC<Props> = ({
  color,
  children,
  onClick = () => {},
  className = "",
  disabled = false,
}) => {
  return (
    <button
      className={classNames(
        "w-full h-full border-[1px] rounded-full py-2",
        {
          "bg-[#d3d3d3] text-white": color === "disabled" || disabled,
          "bg-primary hover:bg-primary-hover": color === "primary",
          "bg-white hover:bg-primary-hover": color === "white",
          "bg-white hover:bg-[#FF0000] text-[#ff0000] hover:text-white border-[#ff0000]":
            color === "red",
          "bg-primary-fourth hover:bg-primary-fourth-hover hover:border-primary-fourth-hover  text-white border-primary-fourth":
            color === "primary-fourth",
        },
        className
      )}
      onClick={
        disabled
          ? () => {
              console.warn("Disabled button");
            }
          : onClick
      }
    >
      {children}
    </button>
  );
};

export default RegularButton;
