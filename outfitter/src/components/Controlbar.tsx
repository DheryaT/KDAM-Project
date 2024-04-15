import React from "react";

const Controlbar = () => {
  return (
    <div className=" grid grid-rows-1 grid-cols-3 flex-row w-full m-4">
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

export default Controlbar;
