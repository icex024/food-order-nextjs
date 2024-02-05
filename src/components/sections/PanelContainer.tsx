import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

export const PanelContainer: React.FC<Props> = ({ children }) => {
  return <div className="w-full min-h-dvh px-10">{children}</div>;
};
