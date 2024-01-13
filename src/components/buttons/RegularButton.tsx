import classNames from "classnames";
import { ReactNode } from "react";

interface Props {
  color: "primary" | "white" | "red";
  children: ReactNode;
  onClick?: () => void;
}

const RegularButton: React.FC<Props> = ({
  color,
  children,
  onClick = () => {},
}) => {
  return (
    <button
      className={classNames("w-full h-full border-[1px] rounded", {
        "bg-primary hover:bg-primary-hover": color === "primary",
        "bg-white hover:bg-primary-hover": color === "white",
        "bg-white hover:bg-[#FF0000] text-[#ff0000] hover:text-white border-[#ff0000]":
          color === "red",
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default RegularButton;
