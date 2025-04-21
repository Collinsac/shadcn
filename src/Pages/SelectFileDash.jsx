import { Search } from "lucide-react";
import React from "react";

const SelectFileDash = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].reduce(
    (acc, curr, i) => {
      if (i % 4 === 0) acc.push([]);
      acc[acc.length - 1].push(curr);
      return acc;
    },
    []
  );
  return (
    <div className="p-5 w-full flex flex-col gap-y-3">
      <div className="p-5 bg-white sticky top-14 flex justify-between">
        {/* Search bar  */}
        <div className="flex gap-x-1 pl-2 rounded-md items-center bg-gray-50 w-fit shadow-sm">
          <Search size={18} />
          <input type="text" className="bg-transparent p-2 outline-none" />
        </div>

        <div className="flex w-[600px] gap-x-3">
          <select
            name=""
            id=""
            // value={selectValue}
            // onChange={(e) => setSelectValue(e.target.value)}
            className="w-full bg-gray-50 shadow-sm py-2 rounded-md border text-gray-300 text-sm outline-none"
          >
            <option value="RH">Trier par</option>
          </select>

          <select
            name=""
            id=""
            // value={selectValue}
            // onChange={(e) => setSelectValue(e.target.value)}
            className="w-full bg-gray-50 shadow-sm py-2 rounded-md border text-gray-300 text-sm outline-none"
          >
            <option value="RH">Fréquence de rénouvellement</option>
          </select>
        </div>
      </div>

      <div className="p-5 grow overflow-scroll flex flex-col gap-y-3">
        {data.map((item) => {
          return (
            <div className="bg-gray-50 p-2 grid grid-cols-4 rounded-lg gap-x-3">
              {item.map((ele) => (
                <div className="p-5 bg-white flex-1 rounded-lg py-20"></div>
              ))}
            </div>
          );
        })}
      </div>


      <div className="p-5 bg-white sticky left-0 right-0 bottom-0 flex">
        <label
          htmlFor="file"
          className=" bg-yellow-500 hover:bg-yellow-600 text-white rounded-md flex items-center justify-center px-2 text-sm shadow-sm w-fit p-2"
        >
          imorter un fichier
        </label>
        <input type="file" name="file" id="file" className="opacity-0" />
      </div>
    </div>
  );
};

export default SelectFileDash;
