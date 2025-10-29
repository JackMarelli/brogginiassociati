import { useNavigate, useLocation } from "react-router-dom";

export default function NavOption({ text = "Option", to = "" }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    navigate(`/${to}`);
  };

  const isActive =
    to === ""
      ? location.pathname === "/"
      : location.pathname.startsWith(`/${to}`);

  return (
    <span
      onClick={handleClick}
      className={`w-fit text-sm 2xl:text-lg font-normal cursor-pointer transition-colors duration-200 ${
        isActive ? "text-black" : "text-gray-400 hover:text-gray-700"
      }`}
    >
      {text}
    </span>
  );
}
