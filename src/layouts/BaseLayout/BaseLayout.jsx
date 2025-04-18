
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";

export default function BaseLayout({children}) {
  return (
    <div className="w-full h-fit min-h-screen">
      <Nav />
      {children}
      <Footer />
    </div>
  );
}
