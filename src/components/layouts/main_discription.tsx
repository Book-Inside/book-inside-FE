import { ChildrenProps } from "@interface/type";

export default function MainDiscription({ children }: ChildrenProps) {
  return <div className="mt-1 text-gray-700">{children}</div>;
}
