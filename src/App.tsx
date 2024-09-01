import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./components/router";

function App() {
  // return <>{router}</>;
  return <RouterProvider router={router} />;
}

export default App;
