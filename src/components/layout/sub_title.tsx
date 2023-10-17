import { ChildrenProps } from "@interface/type";

export default function SubTitle({ children }: ChildrenProps) {
  return <h2 className="mb-4">{children}</h2>;
}
