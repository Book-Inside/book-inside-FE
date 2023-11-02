import CheckIcon from "@assets/icons/check_icon";
import { SignupPasswordProps } from "@interface/type";
import Btn from "./btn";
import CheckDownIcon from "@assets/icons/check_down_icon";

export default function SignupPassword({
  email,
  handleChange,
  handleNext,
  password,
  selected,
}: SignupPasswordProps) {
  return (
    <>
      <form>
        <label htmlFor="password" className="login_label">
          비밀번호
        </label>
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
        <div className="text-point-700 text-sm mt-2">
          영문, 숫자, 특수문자 포함 8-16자 이내로 입력
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
        <Btn onClick={handleNext} color="point" text="다음" />
      </div>
    </>
  );
}
