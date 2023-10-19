import { ReactNode } from "react";

// Layout
export interface ChildrenProps {
  children: ReactNode;
}

// btn
export interface BtnProps {
  text: string;
  color: "point" | "white" | "gray";
  disabled?: boolean | undefined;
  onClick?: () => void;
}

// app bar
export interface AppBarProps {
  isCurrentPage: boolean;
}

// nav
export interface NavProps {
  isTitle?: boolean;
  isIcon?:boolean;
  title?: string;
}