import CheckIcon from "@assets/icons/check_icon";
import Btn from "./btn";
import { SignupVerifyPasswordProps } from "@interface/type";

export default function SignupVerifyPassword({
  email,
  selected,
  verifyPassword,
  handleChange,
  handleNext,
  password,
}: SignupVerifyPasswordProps) {
  return (
    <>
      <form className="space-y-4">
        <label htmlFor="verify_password" className="login_label">
          비밀번호 확인
        </label>

        <div className="login_input_icon_box">
          <input
            onChange={handleChange}
            value={verifyPassword}
            id="verify_password"
            type="password"
            className="login_input focus:border-point-900 focus:outline-none"
          />
          <CheckIcon />
        </div>
        <div>
          <label htmlFor="password" className="login_label">
            비밀번호
          </label>
        </div>
        <div className="login_input_icon_box">
          <input
            onChange={handleChange}
            value={password}
            id="password"
            type="password"
            className="login_input focus:border-point-900 focus:outline-none"
          />
          <CheckIcon />
        </div>
      </form>
      <div className="mt-6">
        <label htmlFor="email" className="login_label">
          이메일
        </label>
        <div className="login_input_icon_box">
          <input
            disabled
            placeholder="이메일 @ 직접입력"
            className="login_input focus:border-point-900 focus:outline-none "
            type="text"
            value={email + selected}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            className="w-6 h-6 absolute right-4"
          >
            <path
              d="M15.8396 11.2931C16.0705 11.0365 16.0497 10.6414 15.7931 10.4104C15.5365 10.1795 15.1414 10.2003 14.9104 10.4569L15.8396 11.2931ZM12 14.625L11.5354 15.0431C11.654 15.1748 11.8228 15.25 12 15.25C12.1772 15.25 12.346 15.1748 12.4646 15.0431L12 14.625ZM9.08956 10.4569C8.85865 10.2003 8.46347 10.1795 8.2069 10.4104C7.95033 10.6414 7.92953 11.0365 8.16044 11.2931L9.08956 10.4569ZM20.375 12C20.375 16.6254 16.6254 20.375 12 20.375V21.625C17.3157 21.625 21.625 17.3157 21.625 12H20.375ZM12 20.375C7.37462 20.375 3.625 16.6254 3.625 12H2.375C2.375 17.3157 6.68426 21.625 12 21.625V20.375ZM3.625 12C3.625 7.37462 7.37462 3.625 12 3.625V2.375C6.68426 2.375 2.375 6.68426 2.375 12H3.625ZM12 3.625C16.6254 3.625 20.375 7.37462 20.375 12H21.625C21.625 6.68426 17.3157 2.375 12 2.375V3.625ZM14.9104 10.4569L11.5354 14.2069L12.4646 15.0431L15.8396 11.2931L14.9104 10.4569ZM12.4646 14.2069L9.08956 10.4569L8.16044 11.2931L11.5354 15.0431L12.4646 14.2069Z"
              fill="#71767E"
            />
          </svg>
        </div>
        {/* <div className="flex items-center space-x-1 text-gray-700 text-sm mt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M6.13974 11.7068C6.02778 11.7117 5.91744 11.6788 5.8264 11.6135L2.83307 9.14016C2.64022 8.96942 2.61118 8.67905 2.7664 8.47349C2.93685 8.28153 3.22497 8.24984 3.43307 8.40016L6.09974 10.5735L13.0997 4.10016C13.3067 3.94474 13.5982 3.97302 13.7714 4.16534C13.9447 4.35767 13.9425 4.65043 13.7664 4.84016L6.47974 11.5735C6.38692 11.6587 6.2657 11.7062 6.13974 11.7068Z"
              fill="#35383F"
            />
          </svg>
          <span>이메일로 인증번호 전송완료</span>
        </div> */}
      </div>
      <div className="bottom-[52px] fixed min-w-[342px]">
        <Btn onClick={handleNext} color="point" text="회원가입 완료" />
      </div>
    </>
  );
}
