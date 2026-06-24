import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Backgraund from "../pages/backgraund/Backgraund"
function Layout() {
  return (
    <div className="app">
      <Backgraund/>
      <Navbar />
      <div className="mt-[70px]">
        <main className="contenr">

        <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
