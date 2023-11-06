import { useEffect, useState } from "react";
import SignupEmail from "./signup_email";
import SignupCertification from "./signup_certification";
import SignupPassword from "./signup_password";
import { SignupFormProps } from "@interface/type";
import SignupVerifyPassword from "./signup_verify_password";
import PopUp from "./pop_up";
import CheckPopUpIcon from "@assets/icons/check_pop_up_icon";
import BodyLayout from "./layout/body_layout";

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

  // 드롭다운 옵션을 담는 상태
  const [selected, setSelected] = useState<string>("");

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
    <BodyLayout isMargin>
      <div className="py-6">
        {step === "이메일" && (
          <SignupEmail
            email={email}
            selected={selected}
            handleChange={handleChange}
            setSelected={setSelected}
            handleNext={() => setStep("인증")}
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
        {step === "가입완료" && (
          <PopUp
            icon={<CheckPopUpIcon />}
            title="회원가입 완료!"
            message="본격 시작하기 전 프로필을 먼저 설정해볼까요?"
            buttons={[{ text: "프로필 설정하기", color: "point" }]}
            linkTo="/login"
            linkText="다음에 할래요"
          />
        )}
      </div>
    </BodyLayout>
  );
}
