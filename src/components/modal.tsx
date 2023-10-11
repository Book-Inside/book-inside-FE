import { ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
}

export default function Modal({ children }: ModalProps) {
  return <div className="rounded-2xl p-4">{children}</div>;
}
