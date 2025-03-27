import React from "react";

const Dashboard = () => {
  const MenuComponent = () => {
    return (
      <div className="py-10 border-x border-t px-4 flex items-center justify-center flex-col cursor-pointer hover:bg-gray-300 transition-all ease-in-out duration-200">
        <h2 className="text-2xl">Nombres d’adhérents</h2>
        <p className="text-xl">30650</p>
      </div>
    );
  };
  return (
    <div className="flex-1 p-5">
      <h1 className="text-center my-10 text-3xl">
        Tableau de bord du suivi des adhésions et renouvellement d’adhésion au
        code éthique et déontologie
      </h1>

      <div className="flex p-4 gap-x-5">
        <div className="flex-1 bg-[#D9D9D9] border-b">
          <MenuComponent />
          <MenuComponent />
        </div>
        <div className="flex-[2] bg-blue-600 p-3">
          
        </div>
        <div className="flex-[2] bg-blue-600 p-3"></div>
      </div>
      <div></div>
    </div>
  );
};

export default Dashboard;
