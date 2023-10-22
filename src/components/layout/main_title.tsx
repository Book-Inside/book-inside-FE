import { ChildrenProps } from "@interface/type";

export default function MainTitle({ children }: ChildrenProps) {
  return <h1 className="font-bold text-2xl mt-6 pt-14 text-gray-900">{children}</h1>;
}
