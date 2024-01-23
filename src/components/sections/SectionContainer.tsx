import classNames from "classnames";
import { ReactNode } from "react";

interface Props {
  className?: string;
  children: ReactNode;
}

export const SectionContainer: React.FC<Props> = ({
  className = "",
  children,
}) => {
  return (
    <div className={classNames("max-w-[1200px] w-full mx-auto", className)}>
      {children}
    </div>
  );
};
