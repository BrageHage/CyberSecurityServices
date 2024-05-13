import { Outlet } from "react-router-dom";
import Header from "./header";
import "../index.css";
import Waves from "../assets/waves.png";
const Layout = () => {
  return (
    <div className="h-screen animate-gradient bg-gradient-to-br from-MainBackground via-SecondaryBackground to-ForthBackground overflow-x-hidden">
      <img
        src={Waves}
        className="w-full absolute bottom-100 opacity-30 z-0"
      ></img>
      <div className="relative z-10">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
