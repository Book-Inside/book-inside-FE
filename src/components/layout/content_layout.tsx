import { ChildrenProps } from "@interface/type";

export default function ContentLayout({ children }: ChildrenProps) {
  return <main className="mt-4">{children}</main>;
}
