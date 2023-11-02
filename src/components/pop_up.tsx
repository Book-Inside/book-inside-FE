import { useEffect } from "react";
import Btn from "./btn";
import { Link } from "react-router-dom";

export default function PopUp() {
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
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-60 popup-background ">
      <div className="rounded-2xl p-6 min-w-[342px] bg-white shadow-app_bar">
        <div className="flex flex-col space-y-4 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="52"
            height="52"
            viewBox="0 0 52 52"
            fill="none"
          >
            <rect width="52" height="52" rx="26" fill="#DCEFE2" />
            <path
              d="M21.9278 34.3127C21.4659 34.3124 21.0183 34.1522 20.6611 33.8593L14.6878 28.966C13.871 28.2564 13.7666 27.026 14.4521 26.189C15.1376 25.3519 16.3645 25.2118 17.2211 25.8727L21.8478 29.6593L35.1811 17.3793C35.6823 16.7834 36.4837 16.5325 37.2352 16.7363C37.9867 16.9401 38.5516 17.5615 38.6831 18.329C38.8145 19.0964 38.4886 19.8704 37.8478 20.3127L23.2878 33.7793C22.9194 34.1245 22.4327 34.3154 21.9278 34.3127Z"
              fill="#50A57E"
            />
          </svg>
          <div className="flex flex-col space-y-2 items-center">
            <span className="text-gray-900 text-xl font-bold">
              회원가입 완료!
            </span>
            <span className="text-gray-700">
              본격 시작하기 전 프로필을 먼저 설정해볼까요?
            </span>
          </div>
        </div>
        <div className="mt-6 mb-4">
          <Btn text="프로필 설정하기" color="point" />
        </div>
        <Link
          to="/login"
          className="text-gray-500 underline text-sm flex justify-center cursor-pointer"
        >
          다음에 할래요
        </Link>
      </div>
    </div>
  );
}
