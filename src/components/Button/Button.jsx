export default function Button({
  text = "Button",
  onClick = () => console.log(`${text} pressed`),
}) {
  return (
    <div
      onClick={onClick}
      className="w-fit h-fit rounded-lg bg-accent text-white cursor-pointer px-5 py-3"
    >
      {text}
    </div>
  );
}
