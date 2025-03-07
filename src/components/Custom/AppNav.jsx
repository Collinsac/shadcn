import React from "react";
import { SidebarTrigger } from "../ui/sidebar";
import { LogOut, LogOutIcon } from "lucide-react";

const AppNav = () => {
  return (
    <div className="bg-yellow-500 z-50 p-3 shadow-md flex items-center justify-between">
      <SidebarTrigger />
      <LogOut size={15}/>
    </div>
  );
};

export default AppNav;
