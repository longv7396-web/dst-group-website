import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import "./styles.css";

const BarClubPage = React.lazy(() => import("./pages/BarClubPage"));
const HospitalityPage = React.lazy(() => import("./pages/HospitalityPage"));
const ServicesPage = React.lazy(() => import("./pages/ServicesPage"));
const TravelProjectsPage = React.lazy(() => import("./pages/TravelProjectsPage"));
const ProjectDetailPage = React.lazy(() => import("./pages/ProjectDetailPage"));
const AnimationLabPage = React.lazy(() => import("./pages/AnimationLabPage"));
const isDev = import.meta.env.DEV;

const standaloneRoutes: Record<string, string> = {
  "/dstbarclub": "/bar-club",
  "/dsthotel": "/nha-hang-khach-san",
  "/dstservice": "/dich-vu",
};

if (isDev) {
  standaloneRoutes["/animation-lab"] = "/animation-lab";
}

const pathname = window.location.pathname.replace(/\/$/, "");
const standaloneHash = standaloneRoutes[pathname];

if (standaloneHash && (!window.location.hash || window.location.hash === "#/")) {
  window.history.replaceState(null, "", `${window.location.pathname}#${standaloneHash}`);
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <React.Suspense fallback={<div className="min-h-screen bg-[#050707]" role="status" aria-label="Đang tải nội dung" />}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/bar-club" element={<BarClubPage />} />
          <Route path="/nha-hang-khach-san" element={<HospitalityPage />} />
          <Route path="/dich-vu" element={<ServicesPage />} />
          <Route path="/projects" element={<TravelProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectDetailPage />} />
          {isDev ? <Route path="/animation-lab" element={<AnimationLabPage />} /> : null}
          <Route path="*" element={<App />} />
        </Routes>
      </React.Suspense>
    </HashRouter>
  </React.StrictMode>,
);
