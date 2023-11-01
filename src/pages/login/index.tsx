import BodyLayout from "@components/layout/body_layout";
import LoginForm from "@components/login_form";
import Nav from "@components/nav";

export default function LoginPage() {
  return (
    <>
      <Nav isTitle title="로그인" />
      <BodyLayout>
        <LoginForm />
      </BodyLayout>
    </>
  );
}
