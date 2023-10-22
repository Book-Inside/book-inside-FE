import { ChildrenProps } from "@interface/type";

export default function Content({ children }: ChildrenProps) {
  return <main className="mt-4">{children}</main>;
}
