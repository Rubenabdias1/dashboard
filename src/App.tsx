import "./App.css";
import "chart.js/auto";
import { HomePage } from "./pages/Home/Home.page";
import { AppWrapper } from "./components/AppWrapper/AppWrapper";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppWrapper />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/sales",
        element: <HomePage />,
      },
      {
        path: "/inventory",
        element: <h1>Hi</h1>,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
