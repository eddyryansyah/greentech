import { createBrowserRouter } from "react-router-dom";
import DetailContent from "@/pages/DetailContent";
import Home from "@/pages/Home";
import GuidePage from "@/pages/GuidePage";
import AboutPage from "@/pages/AboutPage";
import MainFeature from "@/pages/MainFeature";

export const BASE_URL = "/plant-t";
export const DETAIL_URL = BASE_URL + "/detail";
export const GUIDE_URL = BASE_URL + "/panduan";
export const DEVELOP_URL = BASE_URL + "/pengembang";
export const MAINFEATURE_URL = BASE_URL + "/feature";

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
  {
    path: MAINFEATURE_URL,
    element: <MainFeature />
  },
]);

// <HashRouter>
//   <Routes>
//     <Route path="/" element={<Home />} />
//     <Route path="/detail" element={<DetailContent />} />
//     <Route path="/guide" element={<GuidePage />} />
//   </Routes>
// </HashRouter>
