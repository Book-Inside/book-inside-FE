import { ChildrenProps } from "@interface/type";

export default function BodyLayout({ children }: ChildrenProps) {
  return <div className="px-6">{children}</div>;
}
