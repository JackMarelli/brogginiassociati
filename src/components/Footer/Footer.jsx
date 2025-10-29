import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-accent text-white pt-12 pb-4">
      <div className="w-full px-8 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
          {/* Logo Column */}
          <div className="col-span-1">
            <img
              src="/assets/logo/white.png"
              alt="Studio Broggini Logo"
              className="w-16 aspect-square"
            />
          </div>
          {/* Esplora Column */}
          <div className="col-span-1 xl:col-start-3">
            <h3 className="text-lg 2xl:text-xl mb-4">Esplora</h3>
            <ul className="space-y-2 text-sm 2xl:text-base">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/studio" className="text-gray-300 hover:text-white">
                  Lo studio
                </Link>
              </li>
              <li>
                <Link
                  to="/professionisti"
                  className="text-gray-300 hover:text-white"
                >
                  I professionisti
                </Link>
              </li>
              <li>
                <Link to="/servizi" className="text-gray-300 hover:text-white">
                  I nostri servizi
                </Link>
              </li>
            </ul>
          </div>

          {/* Altre pagine Column */}
          <div className="col-span-1">
            <h3 className="text-lg 2xl:text-2xl mb-4">Altre pagine</h3>
            <ul className="space-y-2 text-sm 2xl:text-lg">
              <li>
                <Link
                  to="/compliance"
                  className="text-gray-300 hover:text-white"
                >
                  Compliance
                </Link>
              </li>
              <li>
                <Link
                  to="/circolari"
                  className="text-gray-300 hover:text-white"
                >
                  Circolari
                </Link>
              </li>
            </ul>
          </div>

          {/* Come trovarci Column */}
          <div className="col-span-1">
            <h3 className="text-lg 2xl:text-2xl mb-4">Come trovarci</h3>
            <ul className="space-y-2 text-sm 2xl:text-lg"> 
              <li className="text-gray-300">Varese - Via Dandolo 5</li>
              <li className="text-gray-300">Busto A. - Via Marsala 20</li>
              <li className="mt-2">
                <a
                  href="https://www.linkedin.com/company/brogginiassociati"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Contatti Column */}
          <div className="col-span-1">
            <h3 className="text-lg 2xl:text-2xl mb-4">Contatti</h3>
            <ul className="space-y-2 text-sm 2xl:text-lg"> 
              <li className="text-gray-300">(+39) 0332 287598</li>
              <li className="text-gray-300">studio@pec.brogginiassociati.it</li>
              <li className="text-gray-300">studio@brogginiassociati.it</li>
              <li className="text-gray-300">P.IVA 02694070125</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-3 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-xs 2xl:text-sm">
            Copyright © Studio Broggini 2025
          </p>
          <Link to="/privacy">
            <p className="text-gray-400 text-xs 2xl:text-sm">Privacy Policy</p>
          </Link>
        </div>
      </div>
    </footer>
  );
}
