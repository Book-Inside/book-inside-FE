import { ReactNode } from "react";

interface HeaderProps {
  children: ReactNode;
}

export default function Header({ children }: HeaderProps) {
  return <header className="h-14 mb-6">{children}</header>;
}
