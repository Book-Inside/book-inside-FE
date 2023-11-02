import { useEffect, useRef, useState } from "react";
import SignupEmail from "./signup_email";
import SignupCertification from "./signup_certification";
import SignupPassword from "./signup_password";
import { SignupFormProps } from "@interface/type";
import SignupVerifyPassword from "./signup_verify_password";
import PopUp from "./pop_up";

export default function SignupForm({ setProgress }: SignupFormProps) {
  // 이메일
  const [email, setEmail] = useState<string>("");
  // 인증
  const [certification, setCertification] = useState<string>("");
  // 비밀번호
  const [password, setPassword] = useState<string>("");
  // 비밀번호확인
  const [verifyPassword, setVerifyPassword] = useState<string>("");
  // 패널 패턴 스텝
  const [step, setStep] = useState<
    "이메일" | "인증" | "비밀번호" | "비밀번호확인" | "가입완료"
  >("이메일");

  // 드롭다운 열거나 닫는 상태
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const timeoutRef = useRef<number | null>(null);

  // 드롭다운 옵션을 담는 상태
  const [selected, setSelected] = useState<string>("");

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
    setIsOpen(!isOpen);
  };

  /**
   * 드롭다운 옵션을 클릭하였을 때 selected 변수에 담는 함수
   * @param selected
   * (ex. "@naver.com")
   */
  const handleSelect = (selected: string) => {
    setSelected(selected);
  };

  /**
   * input onChange 함수
   * @param e
   * selected 상태 값을 초기화 하고 text 상태에 value 넣어 상태 관리
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (step === "이메일") {
      setSelected("");
      setEmail(value);
    }
    if (step === "인증") {
      setCertification(value);
    }

    if (step === "비밀번호") {
      setPassword(value);
    }

    if (step === "비밀번호확인") {
      setVerifyPassword(value);
    }
  };

  console.log({
    email: email + selected,
    certification,
    password,
    verifyPassword,
  });

  useEffect(() => {
    switch (step) {
      case "이메일":
        setProgress(33);
        break;
      case "인증":
        setProgress(66);
        break;
      case "비밀번호":
      case "비밀번호확인":
      case "가입완료":
        setProgress(100);
        break;
      default:
        setProgress(0);
        break;
    }
  }, [step, setProgress]);

  return (
    <div className="py-6">
      {step === "이메일" && (
        <SignupEmail
          email={email}
          selected={selected}
          handleBlur={handleBlur}
          handleChange={handleChange}
          handleClick={handleClick}
          handleSelect={handleSelect}
          handleNext={() => setStep("인증")}
          isOpen={isOpen}
        />
      )}
      {step === "인증" && (
        <SignupCertification
          handleNext={() => setStep("비밀번호")}
          certification={certification}
          email={email}
          selected={selected}
          handleChange={handleChange}
        />
      )}
      {step === "비밀번호" && (
        <SignupPassword
          email={email}
          handleChange={handleChange}
          handleNext={() => setStep("비밀번호확인")}
          password={password}
          selected={selected}
        />
      )}
      {step === "비밀번호확인" && (
        <SignupVerifyPassword
          email={email}
          selected={selected}
          handleChange={handleChange}
          handleNext={() => setStep("가입완료")}
          verifyPassword={verifyPassword}
          password={password}
        />
      )}
      {step === "가입완료" && <PopUp />}
    </div>
  );
}
