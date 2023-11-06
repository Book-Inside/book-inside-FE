import Nav from "@components/nav";
import SignupForm from "@components/signup_form";
import { useState } from "react";

export default function SignupPage() {
  const [progress, setProgress] = useState<number>(0);

  return (
    <>
      <Nav isTitle title="회원가입" />
      <div className="mt-14 w-full h-[2px] bg-gray-100">
        <div
          className="h-[2px] bg-gray-700"
          style={{ width: `${progress}%` }}
        />
      </div>
      <SignupForm setProgress={setProgress} />
    </>
  );
}
