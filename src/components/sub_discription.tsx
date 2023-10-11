import { ReactNode } from "react";

interface SubDiscriptionProps {
  children: ReactNode;
}

export default function SubDiscription({ children }: SubDiscriptionProps) {
  return <div className="mt-2">{children}</div>;
}
