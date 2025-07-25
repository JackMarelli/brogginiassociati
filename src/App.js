import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Importing pages
import Landing from "./routes/Landing/Landing";
import Studio from "./routes/Studio/Studio";
import Professionisti from "./routes/Professionisti/Professionisti";
import Professionista from "./routes/Professionista/Professionista";
import Servizi from "./routes/Servizi/Servizi";
import Compliance from "./routes/Compliance/Compliance";
import Blog from "./routes/Blog/Blog";
import Privacy from "./routes/Privacy/Privacy";

// Define routes
const router = createBrowserRouter([
  { path: "/", element: <Landing /> },
  { path: "/studio", element: <Studio /> },
  { path: "/servizi", element: <Servizi /> },
  { path: "/professionisti", element: <Professionisti /> },
  { path: "/professionisti/:slug", element: <Professionista /> },
  { path: "/compliance", element: <Compliance /> },
  { path: "/circolari", element: <Blog /> },
  { path: "/circolari/:article", element: <Blog /> },
  { path: "/privacy", element: <Privacy /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
