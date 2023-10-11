import { ReactNode } from "react";

interface MainDiscriptionProps {
  children: ReactNode;
}

export default function MainDiscription({ children }: MainDiscriptionProps) {
  return <div className="mt-1">{children}</div>;
}
