import { ReactNode } from "react";

interface MainTitleProps {
  children: ReactNode;
}
export default function MainTitle({ children }: MainTitleProps) {
  return <h1 className="font-bold text-2xl mb-6">{children}</h1>;
}
