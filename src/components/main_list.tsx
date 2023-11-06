import ArrowRight from "@assets/icons/arrow_right";
import MainTitle from "./main_title";
import BookList from "./book_list";
import BookListIcon from "@assets/icons/book_list_icon";

export default function MainList() {
  return (
    <div className="p-6">
      <div>
        <MainTitle
          leftText="책 목록"
          rightIcon={<ArrowRight />}
          rightText="전체보기"
        />
        <div className="grid grid-cols-2 grid-rows-2 gap-2">
          <BookList
            count={0}
            icon={<BookListIcon text="읽고 있는 책" />}
            text="읽고 있는 책"
          />
          <BookList
            count={0}
            icon={<BookListIcon text="읽고 싶은 책" />}
            text="읽고 있는 책"
          />{" "}
          <BookList
            count={0}
            icon={<BookListIcon text="다 읽은 책" />}
            text="읽고 있는 책"
          />{" "}
          <BookList
            count={0}
            icon={<BookListIcon text="읽기 중단한 책" />}
            text="읽고 있는 책"
          />
        </div>
      </div>
    </div>
  );
}
