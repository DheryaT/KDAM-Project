import React from "react";

const SavedImages = () => {
  return (
    <div className="h-3/6 w-full flex-col p-5 m-auto mt-10">
      <div className="my-auto">
        <header className="flex flex-row w-full pb-4">
          <h1 className="font-bold w-1/3 pl-7"> Recently Saved </h1>
          <a href="" className=" px-2 mx-auto">
            <h3 className=" font-semibold"> See all </h3>
          </a>
        </header>
      </div>

      <div className="grid grid-cols-2 grid-rows-2 h-full w-4/5 gap-2">
        <div className="m-auto">
          <img
            src="https://picsum.photos/150/150"
            className=" rounded-3xl w-150 h-150"
          />
        </div>

        <div className="m-auto">
          <img
            src="https://picsum.photos/150/150"
            className=" rounded-3xl w-150 h-150"
          />
        </div>

        <div className="m-auto">
          <img
            src="https://picsum.photos/150/150"
            className=" rounded-3xl w-150 h-150"
          />
        </div>

        <div className="m-auto">
          <img
            src="https://picsum.photos/150/150"
            className=" rounded-3xl w-150 h-150"
          />
        </div>
      </div>
    </div>
  );
};

export default SavedImages;
