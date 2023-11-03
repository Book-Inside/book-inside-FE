export default function LoginFormFooter() {
    return (
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
    );
}

