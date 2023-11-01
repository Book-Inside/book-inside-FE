import GoogleIcon from "@assets/icons/google_icon";
import KakaoIcon from "@assets/icons/kakao_icon";
import NaverIcon from "@assets/icons/naver_icon";
import { BtnProps } from "@interface/type";
import { cls } from "@utils/index";

export default function Btn({
  text,
  onClick,
  color,
  disabled = false,
  icon = false,
}: BtnProps) {
  const pointColor = color === "point";
  const whiteColor = color === "white";
  const grayColor = color === "gray";
  const kakaoColor = color === "kakao";
  const naverColor = color === "naver";
  const googleColor = color === "google";

  const backgroundClass = kakaoColor
    ? "btn_kakao"
    : naverColor
    ? "btn_naver"
    : googleColor
    ? "btn_google"
    : pointColor
    ? "btn_point"
    : whiteColor
    ? "btn_white"
    : grayColor
    ? "btn_gray"
    : "";
  return (
    <>
      {icon ? (
        <div className="flex relative items-center cursor-pointer">
          {kakaoColor && <KakaoIcon />}
          {naverColor && <NaverIcon />}
          {googleColor && <GoogleIcon />}
          <button
            type="button"
            onClick={onClick}
            disabled={disabled}
            className={cls("btn", backgroundClass)}
          >
            {text}
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={onClick}
          disabled={disabled}
          className={cls("btn", backgroundClass)}
        >
          {text}
        </button>
      )}
    </>
  );
}
