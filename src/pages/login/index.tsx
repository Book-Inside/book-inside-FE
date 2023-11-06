import LoginForm from "@components/login_form";
import Nav from "@components/nav";

export default function LoginPage() {
  return (
    <>
      <Nav isTitle title="로그인" />
      <LoginForm />
    </>
  );
}
