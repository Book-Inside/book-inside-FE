import { ChildrenProps } from "@interface/type";

export default function MainTitle({ children }: ChildrenProps) {
  return <h1 className="font-bold text-2xl mb-6">{children}</h1>;
}
