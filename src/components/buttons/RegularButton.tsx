import classNames from "classnames";
import { ReactNode } from "react";

interface Props {
  color: "primary" | "white" | "red" | "primary-fourth";
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

const RegularButton: React.FC<Props> = ({
  color,
  children,
  onClick = () => {},
  className = "",
}) => {
  return (
    <button
      className={classNames(
        "w-full h-full border-[1px] rounded-full py-2",
        {
          "bg-primary hover:bg-primary-hover": color === "primary",
          "bg-white hover:bg-primary-hover": color === "white",
          "bg-white hover:bg-[#FF0000] text-[#ff0000] hover:text-white border-[#ff0000]":
            color === "red",
          "bg-primary-fourth hover:bg-primary-fourth-hover hover:border-primary-fourth-hover  text-white border-primary-fourth":
            color === "primary-fourth",
        },
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default RegularButton;
