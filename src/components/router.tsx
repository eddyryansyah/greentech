import { createBrowserRouter } from "react-router-dom";
import DetailContent from "@/pages/DetailContent";
import Home from "@/pages/Home";
import GuidePage from "@/pages/GuidePage";
import AboutPage from "@/pages/AboutPage";

export const BASE_URL = "/plant-t";
export const DETAIL_URL = BASE_URL + "/detail";
export const GUIDE_URL = BASE_URL + "/panduan";
export const DEVELOP_URL = BASE_URL + "/pengembang";

export const router = createBrowserRouter([
  {
    path: `${BASE_URL}/`,
    element: <Home />,
  },
  { path: DETAIL_URL, element: <DetailContent /> },
  {
    path: GUIDE_URL,
    element: <GuidePage />,
  },
  {
    path: DEVELOP_URL,
    element: <AboutPage />,
  },
]);

// <HashRouter>
//   <Routes>
//     <Route path="/" element={<Home />} />
//     <Route path="/detail" element={<DetailContent />} />
//     <Route path="/guide" element={<GuidePage />} />
//   </Routes>
// </HashRouter>
