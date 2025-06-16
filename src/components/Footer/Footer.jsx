import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-accent text-white py-12">
      <div className="w-full px-8 md:px-16 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
          {/* Logo Column */}
          <div className="col-span-1">
            <img
              src="/assets/logo/white.png"
              alt="Studio Broggini Logo"
              className="w-24 aspect-square"
            />
          </div>

          {/* Empty Column */}
          <div className="hidden md:block"></div>

          {/* Esplora Column */}
          <div className="col-span-1">
            <h3 className="text-xl mb-4">Esplora</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Lo studio
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  I professionisti
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  I nostri servizi
                </a>
              </li>
            </ul>
          </div>

          {/* Altre pagine Column */}
          <div className="col-span-1">
            <h3 className="text-xl mb-4">Altre pagine</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Compliance
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Blog & News
                </a>
              </li>
            </ul>
          </div>

          {/* Come trovarci Column */}
          <div className="col-span-1">
            <h3 className="text-xl mb-4">Come trovarci</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Varese - Via Dandolo 5</li>
              <li className="text-gray-300">Busto A. - Via Marsala 20</li>
              <li className="mt-2">
                <a href="#" className="text-gray-300 hover:text-white">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Contatti Column */}
          <div className="col-span-1">
            <h3 className="text-xl mb-4">Contatti</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">(+39) 0332 287598</li>
              <li className="text-gray-300">studio@pec.brogginiassociati.it</li>
              <li className="text-gray-300">studio@brogginiassociati.it</li>
              <li className="text-gray-300">P.IVA 02694070125</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">©Copyright 2025</p>
          <Link to="/privacy">
            <p oncli className="text-gray-400 text-sm">
              Privacy Policy
            </p>
          </Link>
        </div>
      </div>
    </footer>
  );
}
