import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./Pages/App.tsx";
import "./Styles/index.css";
import Layout from "./Layout/index.tsx";
import KontaktSkjema from "./Pages/Contact.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<App />} />
          <Route path="/kontakt" element={<KontaktSkjema />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
