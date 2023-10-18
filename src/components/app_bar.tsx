import AddIcon from "@assets/icons/add_icon";
import BookIcon from "@assets/icons/book_icon";
import DataIcon from "@assets/icons/data_icon";
import FeedIcon from "@assets/icons/feed_icon";
import MyIcon from "@assets/icons/my_icon";
import { cls } from "@utils/index";
import { Link, useLocation } from "react-router-dom";

export default function AppBar() {
  const pathname = useLocation().pathname;
  const isMainPage = pathname === "/main";
  const isDataPage = pathname === "/";
  const isAddPage = pathname === "/";
  const isFeedPage = pathname === "/";
  const isMyPage = pathname === "/";

  return (
    <nav className="app_bar">
      <div className="app_bar_box">
        <Link to="/main" className="app_bar_link">
          <BookIcon isCurrentPage={isMainPage} />
          <span
            className={cls(
              "app_bar_text",
              isMainPage ? "text-point-900" : "text-gray-400",
            )}
          >
            내 서재
          </span>
        </Link>
        <Link to="/" className="app_bar_link">
          <DataIcon isCurrentPage={isDataPage} />
          <span
            className={cls(
              "app_bar_text",
              isDataPage ? "text-point-900" : "text-gray-400",
            )}
          >
            통계
          </span>
        </Link>
        <Link to="/main" className="app_bar_link">
          <AddIcon isCurrentPage={isAddPage} />
          <span
            className={cls(
              "app_bar_text",
              isAddPage ? "text-point-900" : "text-gray-400",
            )}
          >
            책 추가
          </span>
        </Link>
        <Link to="/main" className="app_bar_link">
          <FeedIcon isCurrentPage={isFeedPage} />
          <span
            className={cls(
              "app_bar_text",
              isFeedPage ? "text-point-900" : "text-gray-400",
            )}
          >
            피드
          </span>
        </Link>
        <Link to="/main" className="app_bar_link">
          <MyIcon isCurrentPage={isMyPage} />
          <span
            className={cls(
              "app_bar_text",
              isMyPage ? "text-point-900" : "text-gray-400",
            )}
          >
            마이
          </span>
        </Link>
      </div>
    </nav>
  );
}
