import MainLayout from "@/layout/MainLayout";
import DetailContent from "@/pages/DetailContent";
import Home from "@/pages/Home";
import Nyoba from "@/pages/Nyoba";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "detail",
        element: <DetailContent />,
      },
      {
        path: "oke",
        element: <Nyoba />,
      },
    ],
  },
]);
