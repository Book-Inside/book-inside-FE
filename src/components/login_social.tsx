import Btn from "./btn";

export default function LoginSocial() {
  return (
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
  );
}
