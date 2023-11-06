import { ReactNode } from "react";

// COMPONENT

// Layout
export interface ChildrenProps {
  children: ReactNode;
  isMargin?: boolean;
}

// btn
export interface BtnProps {
  text: string;
  color: "point" | "white" | "gray" | "kakao" | "naver" | "google" | string;
  disabled?: boolean | undefined;
  onClick?: () => void;
  icon?: boolean | undefined;
}

// app_bar
export interface AppBarProps {
  isCurrentPage: boolean;
}

// nav
export interface NavProps {
  isTitle?: boolean;
  isIcon?: boolean;
  title?: string;
}

// progress_bar
export interface ProgressBarProps {
  progress: number;
}

// dropdown
export interface DropdownProps {
  handleSelect: (selected: string) => void;
  isOpen: boolean;
}

// pop_up
export interface PopUpProps {
  icon: JSX.Element;
  title: string;
  message: string;
  buttons: { text: string; color: string; onClick?: () => void }[];
  linkText?: string;
  linkTo?: string;
}

// main_title
export interface MainTitleProps {
  leftIcon?: JSX.Element;
  leftText: string;
  count?: number;
  rightText?: string;
  rightIcon?: JSX.Element;
}

// book_list
export interface BookListProps {
  icon: JSX.Element;
  count: number;
  text: string;
}

// PAGES

// signup_form
export interface SignupFormProps {
  setProgress: (progress: number) => void;
}

// signup_email
export interface SignupEmailProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleNext: () => void;
  email: string;
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

// signup_certification
export interface SignupCertificationProps {
  email: string;
  selected: string;
  certification: string;
  handleNext: () => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// signup_password
export interface SignupPasswordProps {
  email: string;
  selected: string;
  password: string;
  handleNext: () => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// signup_verify_password
export interface SignupVerifyPasswordProps {
  email: string;
  selected: string;
  verifyPassword: string;
  password: string;
  handleNext: () => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
