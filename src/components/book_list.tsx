import { BookListProps } from "@interface/type";

export default function BookList({ icon, count, text }: BookListProps) {
  return (
    <div className="book_list_box">
      <div className="pl-3">{icon}</div>
      <div className="py-3 pr-[37px]">
        <span>{text}</span>
        <div className="text-gray-900">
          <span className="font-semibold text-lg">{count}</span>
          <span>권</span>
        </div>
      </div>
    </div>
  );
}
