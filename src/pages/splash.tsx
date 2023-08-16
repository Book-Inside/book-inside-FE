import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/info");
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, [navigate]);

  return <div>Splash</div>;
}
