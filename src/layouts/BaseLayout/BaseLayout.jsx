import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";

export default function BaseLayout({ children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col w-full min-h-screen overflow-x-hidden">
      <Nav />
      <main className="w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
}
