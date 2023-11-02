import { useEffect } from "react";
import Btn from "./btn";
import { Link } from "react-router-dom";
import { PopUpProps } from "@interface/type";

export default function PopUp({
  icon,
  title,
  message,
  buttons,
  linkText,
  linkTo,
}: PopUpProps) {
  useEffect(() => {
    // overflow: hidden을 적용하여 body 스크롤을 비활성화
    document.body.style.overflow = "hidden";

    // 팝업이 언마운트될 때 실행될 클린업 함수
    return () => {
      // overflow를 제거하여 스크롤을 다시 활성화
      document.body.style.overflow = "";
    };
  }, []); // 빈 의존성 배열로 마운트될 때만 실행

  return (
    <div className="popup_background popup_background_box">
      <div className="popup_box">
        <div className="flex flex-col space-y-4 items-center">
          {icon}
          <div className="flex flex-col space-y-2 items-center">
            <span className="text-gray-900 text-xl font-bold">{title}</span>
            <span className="text-gray-700">{message}</span>
          </div>
        </div>
        <div className="mt-6 mb-4">
          {buttons.map((button, index) => (
            <Btn
              key={index}
              text={button.text}
              color={button.color}
              onClick={button.onClick}
            />
          ))}
        </div>

        {linkText && linkTo && (
          <Link to={linkTo} className="popup_link">
            {linkText}
          </Link>
        )}
      </div>
    </div>
  );
}
