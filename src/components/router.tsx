import DetailContent from "@/pages/DetailContent";
import Home from "@/pages/Home";
import { HashRouter, Routes, Route } from "react-router-dom";

export const router = (
  <HashRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="detail" element={<DetailContent />} />
    </Routes>
  </HashRouter>
);
