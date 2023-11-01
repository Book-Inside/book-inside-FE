import BackIcon from "@assets/icons/back_icon";
import { NavProps } from "@interface/type";
import { useNavigate } from "react-router-dom";

export default function Nav({ isTitle, title, isIcon }: NavProps) {
  const navigate = useNavigate();
  return (
    <nav className="nav">
      <div className="nav_box">
        <div className="flex-1" onClick={() => navigate(-1)}>
          <BackIcon />
        </div>
        {isTitle && (
          <>
            <div className="nav_title">{title}</div>
            {isIcon ? <></> : <div className="flex-1" />}
          </>
        )}
        {isIcon && (
          <div className="flex-1 flex justify-end">
            <BackIcon />
          </div>
        )}
      </div>
    </nav>
  );
}
