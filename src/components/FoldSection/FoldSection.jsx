import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

export default function FoldSection({
  title,
  text,
  image,
  buttonText,
  buttonLink,
  alignment = "left",
  height = "h-screen",
  textMaxWidth = "md:max-w-[40%]",
  centered = false,
}) {
  const navigate = useNavigate();

  const justify = centered
    ? "justify-center items-center text-center"
    : alignment === "center"
    ? "items-center text-center"
    : "items-start text-left";

  const position = centered ? "inset-0" : "bottom-1/2 translate-y-1/2 left-8 md:left-24";

  return (
    <section className={`w-full ${height} relative`}>
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div
        className={`absolute ${position} z-20 flex flex-col gap-8 ${justify} ${
          centered ? "flex justify-center items-center" : ""
        }`}
      >
        <h1 className="text-white text-4xl md:text-5xl font-medium whitespace-pre-line">
          {title}
        </h1>
        <p className={`text-white text-md ${textMaxWidth}`}>{text}</p>
        {buttonText && buttonLink && (
          <Button text={buttonText} onClick={() => navigate(buttonLink)} />
        )}
      </div>
    </section>
  );
}
