import { Outlet } from "react-router-dom";
import Backgraund from "../../src/pages/backgraund/Backgraund";
import Navbar from "../AdminComponents/Navbar/Navbar";
import Head from "../AdminComponents/head/Head";

function AdminLayout() {
  return (
    <div className="flex gap-[10px] flex-row">
      <Backgraund />
      <Navbar />
      <main className="flex w-[100%] flex-col">
        <div className="head w-full">
          <Head />
        </div>
        <div className="mt-[30px]">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default AdminLayout;
