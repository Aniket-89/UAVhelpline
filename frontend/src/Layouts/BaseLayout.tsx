import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import Anouncements from "../components/Anouncements";

const BaseLayout = () => {
  return (
    <div className="">
      <Anouncements />

      <Header />
      <main className="">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default BaseLayout;
