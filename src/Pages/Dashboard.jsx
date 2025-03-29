import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";
import { Link, Outlet } from "react-router-dom";

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

export const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const Dashboard = () => {
  const MenuComponent = ({ title, route }) => {
    return (
      <Link
        to={route}
        className="py-10 border-x border-t px-4 flex items-center justify-center flex-col cursor-pointer hover:bg-gray-200 transition-all ease-in-out duration-200"
      >
        <h2 className="text-2xl">{title}</h2>
        <p className="text-xl">30650</p>
      </Link>
    );
  };
  return (
    <div className="flex-1 p-5">
      <h1 className="text-center my-10 text-3xl">
        Tableau de bord du suivi des adhésions et renouvellement d’adhésion au
        code éthique et déontologie
      </h1>

      <div className="flex p-4 gap-x-5 items-center">
        <div className="flex-1 bg-gray-100 border-b">
          <MenuComponent
            title="Nombres d’adhérents"
            route="/home/dashboard/adherents"
          />
          <MenuComponent
            title="Nombres de non adhérents"
            route="/home/dashboard/nonadherents"
          />
        </div>
        <div className="flex-[2] p-3 flex items-center justify-center h-[400px] shadow-sm rounded-md">
          <Bar options={options} data={data} />
        </div>
        <div className="flex-1 p-3 flex items-center justify-center h-[400px] shadow-sm rounded-md">
          <Doughnut data={data} />
        </div>
      </div>
      <div className="mt-10">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
