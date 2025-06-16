// BaseLayout.jsx
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";

export default function BaseLayout({children}) {
  return (
    <div className="flex flex-col w-full min-h-screen overflow-x-hidden pt-20 md:pt-24">
      <Nav />
      <main className="w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
}