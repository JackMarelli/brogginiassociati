import { useNavigate, useLocation } from "react-router-dom";

export default function Button({ text = "Option", to = "" }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    navigate(`/${to}`);
  };

  const isActive = location.pathname.startsWith(`/${to}`);

  return (
    <span
      onClick={handleClick}
      className={`w-fit cursor-pointer transition-colors duration-200 ${
        isActive ? "text-black" : "text-gray-300 hover:text-gray-600"
      }`}
    >
      {text}
    </span>
  );
}
