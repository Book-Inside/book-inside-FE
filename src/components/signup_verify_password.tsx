import CheckIcon from "@assets/icons/check_icon";
import Btn from "./btn";
import { SignupVerifyPasswordProps } from "@interface/type";
import CheckDownIcon from "@assets/icons/check_down_icon";

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
            className="login_input signup_email_input"
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
            className="login_input signup_email_input"
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
            className="login_input signup_email_input"
            type="text"
            value={email + selected}
          />
          <div className="absolute right-4">
            <CheckDownIcon />
          </div>
        </div>
      </div>
      <div className="bottom-[52px] fixed min-w-[342px]">
        <Btn onClick={handleNext} color="point" text="회원가입 완료" />
      </div>
    </>
  );
}
