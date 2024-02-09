import classNames from "classnames";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  className?: string;
}

export const PanelContainer: React.FC<Props> = ({
  children,
  className = "",
}) => {
  return (
    <div className={classNames("w-full min-h-dvh px-10 ", className)}>
      {children}
    </div>
  );
};
