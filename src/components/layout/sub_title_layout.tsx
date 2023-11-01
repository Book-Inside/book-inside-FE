import { ChildrenProps } from "@interface/type";

export default function SubTitleLayout({ children }: ChildrenProps) {
  return <h2 className="mt-6 text-gray-900 text-lg">{children}</h2>;
}
