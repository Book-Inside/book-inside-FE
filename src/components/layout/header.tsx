import { ChildrenProps } from "@interface/type";

export default function Header({ children }: ChildrenProps) {
  return <header className="h-14 mb-6">{children}</header>;
}
