import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Protected({ Component }) {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/signin");
    }
  }, [navigate]);

  return <Component />;
}

export default Protected;
