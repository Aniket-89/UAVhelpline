import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";

const BaseLayout = () => {
  return (
    <div className="flex flex-col justify-between gap-4 md:gap-20">
      <Header />
      <main className="flex-1 flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default BaseLayout;
