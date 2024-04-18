import React from "react";

const ControlBar = () => {
  return (
    <div className=" grid grid-rows-1 grid-cols-3 flex-row pl-4 pt-4 pb-4 w-full">
      <div>
        <input
          className=" bg-yellow-200 h-10 border-none rounded-lg decoration outline-none p-2"
          type="search"
          placeholder="   Search..."
        ></input>
      </div>
    </div>
  );
};

export default ControlBar;
