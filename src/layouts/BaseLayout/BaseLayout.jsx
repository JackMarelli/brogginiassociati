
import Nav from "../../components/Nav/Nav";

export default function BaseLayout({children}) {
  return (
    <div className="w-full h-fit min-h-screen">
      <Nav />
      {children}
    </div>
  );
}
