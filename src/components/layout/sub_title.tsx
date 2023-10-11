import { ReactNode } from "react";

interface SubtitleProps {
  children: ReactNode;
}

export default function SubTitle({ children }: SubtitleProps) {
  return <h2 className="mb-4">{children}</h2>;
}
