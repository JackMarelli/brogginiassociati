import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Importing pages
import Landing from "./routes/Landing/Landing";
import Studio from "./routes/Studio/Studio";

// Define routes
const router = createBrowserRouter([
  { path: "/", element: <Landing /> },
  { path: "/studio", element: <Studio /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
