import { Outlet } from "react-router-dom";
import Sidebar from "./dashboard/Sidebar";

const Layout = () => {
  return (
    <div className="flex h-screen w-screen">
      <Sidebar />
      <div className="flex-grow overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
