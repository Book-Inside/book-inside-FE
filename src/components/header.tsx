import NoticeIcon from "@assets/icons/notice_icon";
import SearchIcon from "@assets/icons/search_icon";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="header_box">
        <div className="header_logo">logo</div>
        <div className="header_icon">
          <Link to="/">
            <NoticeIcon />
          </Link>
          <Link to="/">
            <SearchIcon />
          </Link>
        </div>
      </div>
    </header>
  );
}
