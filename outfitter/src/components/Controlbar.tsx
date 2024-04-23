import React from "react";
import { LuBellRing } from "react-icons/lu";

const ControlBar = () => {
  return (
    <div className=" grid grid-rows-1 grid-cols-3 flex-row pl-4 pt-4 pb-4">
      <div className="col-span-2">
        <input
          className=" bg-yellow-200 h-10 border-none rounded-lg decoration outline-none p-2"
          type="search"
          placeholder="   Search..."
        ></input>
      </div>
      <div className="m-auto">
        <LuBellRing size={30} />
      </div>
    </div>
  );
};

export default ControlBar;
