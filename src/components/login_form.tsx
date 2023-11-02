import CheckIcon from "@assets/icons/check_icon";
import Btn from "./btn";
import SmallCheckIcon from "@assets/icons/check_xs_icon";
import EyeCloseIcon from "@assets/icons/eye_close_icon";
import CheckXsIcon from "@assets/icons/check_xs_icon";

export default function LoginForm() {
  return (
    <>
      <form className="mt-14 pt-6 mb-8">
        <div className="mb-4">
          <label htmlFor="email" className="login_label">
            아이디
          </label>
          <div className="login_input_icon_box mb-2">
            <input
              type="text"
              id="email"
              name="email"
              className="login_input"
              placeholder="아이디(이메일) 입력"
            />
            <CheckIcon />
          </div>
          <div className="login_check_box">
            <div className="login_check_layout">
              <div className="login_check_icon_box">
                <input type="checkbox" className="login_check" />
                <div className="absolute pointer-events-none peer-checked:bg-point-800">
                  <CheckXsIcon />
                </div>
              </div>
              <label htmlFor="" className="login_check_label">
                아이디 저장
              </label>
            </div>
            <div className="login_check_layout">
              <div className="login_check_icon_box">
                <input type="checkbox" className="login_check" />
                <div className="absolute pointer-events-none peer-checked:bg-point-800">
                  <CheckXsIcon />
                </div>
              </div>
              <label htmlFor="" className="login_check_label">
                자동로그인
              </label>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="login_label">
            비밀번호
          </label>
          <div className="login_input_icon_box">
            <input
              type="password"
              id="password"
              name="password"
              className="login_input"
              placeholder="비밀번호 입력"
            />
            <EyeCloseIcon />
          </div>
        </div>
        <div>
          <div className="mb-2">
            <Btn color="point" text="로그인" />
          </div>
          <div className="flex justify-between">
            <div className="flex text-sm text-gray-500 space-x-1">
              <span className="cursor-pointer">아이디 찾기</span>
              <span>|</span>
              <span className="cursor-pointer">비밀번호 찾기</span>
            </div>
            <span className="text-gray-900 text-sm underline cursor-pointer">
              회원가입
            </span>
          </div>
        </div>
      </form>
      <div className="mt-11">
        <div className="relative mb-3">
          <div className="absolute w-full border-t border-gray-100" />
          <div className="relative -top-3 text-center">
            <span className="bg-white px-2 text-gray-400">간편 로그인</span>
          </div>
        </div>
        <div className="space-y-3">
          <Btn icon color="kakao" text="카카오로 시작하기" />
          <Btn icon color="naver" text="네이버로 시작하기" />
          <Btn icon color="google" text="구글로 시작하기" />
        </div>
      </div>
    </>
  );
}
