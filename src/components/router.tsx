import InfoPage from "@pages/info";
import LoginPage from "@pages/login";
import MainPage from "@pages/main";
import SignupPage from "@pages/signup";
import SplashPage from "@pages/splash";
import { Navigate, Route, Routes } from "react-router-dom";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<SplashPage />} />
      <Route path="/info" element={<InfoPage />} />
      <Route path="/main" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
}
