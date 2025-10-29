export default function Button({
  text = "Button",
  onClick = () => console.log(`${text} pressed`),
}) {
  return (
    <div
      onClick={onClick}
      className="w-fit h-fit rounded-lg bg-accent text-sm 2xl:text-base text-white cursor-pointer px-4 py-3 2xl:px-5 2xl:py-3.5"
    >
      {text}
    </div>
  );
}
