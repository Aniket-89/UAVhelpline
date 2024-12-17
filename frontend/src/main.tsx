import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Index from "./components/pages/Index";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <Index />
    <Footer />
  </StrictMode>
);
