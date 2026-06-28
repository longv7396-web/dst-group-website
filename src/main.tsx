import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import "./styles.css";

const BarClubPage = React.lazy(() => import("./pages/BarClubPage"));
const HospitalityPage = React.lazy(() => import("./pages/HospitalityPage"));
const ServicesPage = React.lazy(() => import("./pages/ServicesPage"));

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <React.Suspense fallback={<div className="min-h-screen bg-[#050707]" />}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/bar-club" element={<BarClubPage />} />
          <Route path="/nha-hang-khach-san" element={<HospitalityPage />} />
          <Route path="/dich-vu" element={<ServicesPage />} />
          <Route path="*" element={<App />} />
        </Routes>
      </React.Suspense>
    </HashRouter>
  </React.StrictMode>,
);
