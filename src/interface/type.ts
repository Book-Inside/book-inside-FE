import { ReactNode } from "react";

// Layout
export interface ChildrenProps {
  children: ReactNode;
}

// btn
export interface BtnProps {
  text: string;
  color: "point" | "white" | "gray" | "kakao" | "naver" | "google";
  disabled?: boolean | undefined;
  onClick?: () => void;
  icon?: boolean | undefined;
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

// progress bar
export interface ProgressBarProps {
  progress: number;
}