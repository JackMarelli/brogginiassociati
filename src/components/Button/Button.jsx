export default function Button({
  text = "Button",
  onClick = () => console.log(`${text} pressed`),
}) {
  return (
    <div
      onClick={onClick}
      className="w-fit h-fit rounded-lg bg-accent text-sm text-white cursor-pointer px-4 py-3"
    >
      {text}
    </div>
  );
}
