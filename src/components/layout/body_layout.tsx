import { ChildrenProps } from "@interface/type";

export default function BodyLayout({
  children,
  isMargin = false,
}: ChildrenProps) {
  return <div className={`px-6 ${isMargin ? "" : "mt-14"}`}>{children}</div>;
}
