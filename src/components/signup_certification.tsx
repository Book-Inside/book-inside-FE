import CheckIcon from "@assets/icons/check_icon";
import { SignupCertificationProps } from "@interface/type";
import Btn from "./btn";
import CheckDownIcon from "@assets/icons/check_down_icon";
import CheckSmIcon from "@assets/icons/check_sm_icon";

export default function SignupCertification({
  email,
  selected,
  certification,
  handleNext,
  handleChange,
}: SignupCertificationProps) {
  const redirectToMailbox = () => {
    window.open(`https://mail.google.com/mail/${email}`);
  };
  return (
    <>
      <form>
        <div className="flex justify-between">
          <label htmlFor="certification" className="login_label">
            인증번호
          </label>
          <span className="text-gray-400 text-sm">3:00</span>
        </div>
        <div className="login_input_icon_box">
          <input
            id="certification"
            onChange={handleChange}
            value={certification}
            type="text"
            className="login_input signup_email_input"
          />
          <CheckIcon />
        </div>
        <div className="signup_certification_recurrent">재발송하기</div>
      </form>
      <div>
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
        <div className="signup_certification_complete">
          <CheckSmIcon />
          <span>이메일로 인증번호 전송완료</span>
        </div>
      </div>
      <div className="bottom-[52px] fixed min-w-[342px]">
        <div
          onClick={redirectToMailbox}
          className="mb-4 flex-col flex items-center cursor-pointer"
        >
          <span className="text-gray-500">내 메일 바로가기</span>
          <span className="text-gray-700 underline underline-offset-[3px]">
            {email + selected}
          </span>
        </div>
        <Btn onClick={handleNext} color="point" text="다음" />
      </div>
    </>
  );
}
