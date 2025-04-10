import React from "react";
import { SidebarTrigger } from "../ui/sidebar";
import { LogOut, LogOutIcon } from "lucide-react";
import logo from "../../assets/Images/Logo.svg";
const AppNav = () => {
  return (
    <div className="bg-yellow-500 z-50 p-3 shadow-md flex items-center justify-between">
      <div className="flex items-center gap-x-5">
        <SidebarTrigger />
        <img src={logo} alt="Logo" width={30} />
      </div>
      <LogOut size={15} />
    </div>
  );
};

export default AppNav;
