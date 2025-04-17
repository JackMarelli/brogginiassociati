import { useNavigate } from "react-router-dom";

export default function Button({ text = "Option", to = "" }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/${to}`);
  };

  return (
    <span onClick={handleClick} className="w-fit text-gray-300 cursor-pointer">
      {text}
    </span>
  );
}
