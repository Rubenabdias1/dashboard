import "./App.css";
import "chart.js/auto";
import { HomePage } from "./pages/Home/Home.page";
import { AppWrapper } from "./components/AppWrapper/AppWrapper";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { InventoryPage } from "./pages/Inventory/inventory.page";

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
        element: <InventoryPage />,
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
