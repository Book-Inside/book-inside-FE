import CheckIcon from "@assets/icons/check_icon";
import Btn from "./btn";
import EyeCloseIcon from "@assets/icons/eye_close_icon";
import LoginSocial from "./login_social";
import LoginFormFooter from "./login_form_footer";
import Login_Checkbox from "./login_checkbox";
import LoginInput from "./login_input";

export default function LoginForm() {
  return (
    <>
      <form className="pt-6 mb-8">
        <LoginInput
          label="이메일"
          id="email"
          type="text"
          placeholder="아이디(이메일) 입력"
          icon={<CheckIcon />}
        />
        <div className="login_check_box">
          <Login_Checkbox label="아이디 저장" />
          <Login_Checkbox label="자동로그인" />
        </div>
        <LoginInput
          label="비밀번호"
          id="password"
          type="password"
          placeholder="비밀번호 입력"
          icon={<EyeCloseIcon />}
        />
        <div className="mb-2">
          <Btn color="point" text="로그인" />
        </div>
        <LoginFormFooter />
      </form>
      <LoginSocial />
    </>
  );
}
