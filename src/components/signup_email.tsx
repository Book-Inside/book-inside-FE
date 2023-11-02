import { SignupEmailProps } from "@interface/type";
import Dropdown from "./dropdown";
import Btn from "./btn";
import { useRef, useState } from "react";
import CheckDownIcon from "@assets/icons/check_down_icon";
import CheckUpIcon from "@assets/icons/check_up_icon";

export default function SignupEmail({
  handleChange,
  handleNext,
  email,
  selected,
  setSelected,
}: SignupEmailProps) {
  // 드롭다운 열거나 닫는 상태
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const timeoutRef = useRef<number | null>(null);
  /**
   * 드롭다운을 닫는 동작을 지연시키는 함수
   * 드롭다운 내부에 인터랙티브한 요소가 포함되어있다면, 그 요소를 클릭하려고 할 때 onBlur 이벤트가 발생하므로 드롭다운이 예상보다 빨리 닫힐 수 있으므로 setTimeout 으로 지연시킴.
   */
  const handleBlur = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  /**
   * 해당 타이머를 초기화하여 중복 동작을 방지하는 함수
   */
  const handleClick = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsOpen(prev => !prev);
  };

  /**
   * 드롭다운 옵션을 클릭하였을 때 selected 변수에 담는 함수
   * @param selected
   * (ex. "@naver.com")
   */
  const handleSelect = (selected: string) => {
    setSelected(selected);
  };

  const renderDropdownButton = () =>
    isOpen ? <CheckUpIcon /> : <CheckDownIcon />;

  const isDisabled = !email || (selected === "" && !email.includes("@"));
  return (
    <>
      <form>
        <label htmlFor="email" className="login_label">
          이메일
        </label>
        <div className="login_input_icon_box">
          <input
            id="email"
            placeholder="이메일 @ 직접입력"
            className="login_input signup_email_input"
            type="text"
            onClick={handleClick}
            onBlur={handleBlur}
            onChange={handleChange}
            value={email + selected}
          />
          <div className="w-6 h-6 absolute right-4">
            {renderDropdownButton()}
          </div>
        </div>
      </form>
      <Dropdown isOpen={isOpen} handleSelect={handleSelect} />
      {!email || !selected ? (
        <div className="signup_email_text">
          본인인증을 위해 이메일을 정확하게 입력해주세요.
        </div>
      ) : null}
      <div className="bottom-[52px] fixed min-w-[342px]">
        <Btn
          disabled={isDisabled}
          color="point"
          text="인증번호 보내기"
          onClick={handleNext}
        />
      </div>
    </>
  );
}
