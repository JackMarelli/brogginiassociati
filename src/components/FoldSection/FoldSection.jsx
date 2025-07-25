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
  gradientDirection = "t", // accepts "t", "b", "l", "r", "tr", "bl", etc.
}) {
  const navigate = useNavigate();

  const justify = centered
    ? "justify-center items-center text-center"
    : alignment === "center"
    ? "items-center text-center"
    : "items-start text-left";

  const position = centered
    ? "inset-0"
    : "bottom-1/2 translate-y-1/2 left-8 md:left-24";

  return (
    <section className={`w-full ${height} relative`}>
      <img src={image} alt={title} className="w-full h-full object-cover" />
      
      {/* Gradient Overlay */}
      <div
        className={`absolute inset-0 w-full h-full z-10 bg-gradient-to-${gradientDirection} from-accent to-transparent`}
      ></div>

      <div
        className={`absolute ${position} z-20 flex flex-col gap-8 ${justify} ${
          centered ? "flex justify-center items-center" : ""
        }`}
      >
        <h1 className="text-white text-4xl md:text-5xl 2xl:text-7xl font-medium whitespace-pre-line">
          {title}
        </h1>
        <p className={`text-white text-md 2xl:text-xl ${textMaxWidth}`}>{text}</p>
        {buttonText && buttonLink && (
          <Button text={buttonText} onClick={() => navigate(buttonLink)} />
        )}
      </div>
    </section>
  );
}
