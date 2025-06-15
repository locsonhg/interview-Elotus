import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const LayoutCommon = () => {
  return (
    <div className="layout-common">
      <Header />
      <main className="layout-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default LayoutCommon;
