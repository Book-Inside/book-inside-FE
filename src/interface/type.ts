import { ReactNode } from "react";

// Layout
export interface ChildrenProps {
  children: ReactNode;
}

// btn
export interface BtnProps {
  text: string;
  color: string;
  disabled?: boolean | undefined;
  onClick?: () => void;
}
