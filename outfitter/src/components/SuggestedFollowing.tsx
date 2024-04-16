import React from "react";

const SuggestedFollowing = () => {
  return (
    <div className="h-2/5 w-3/4 flex-col mx-auto pt-4">
      <div className="h-full">
        <header className="flex flex-row w-full pb-4">
          <h1 className="font-bold w-1/2"> Suggested For You </h1>
          <a href="" className=" px-2 mx-auto">
            <h3 className=" font-semibold"> See all </h3>
          </a>
        </header>

        <div className="h-full">
          <div className="h-full w-full flex flex-col justify-evenly">
            <div className="flex flex-row">
              <img
                src="https://picsum.photos/50/50"
                className="rounded-full w-30 h-30"
              />
              <div className="mx-5">
                <h1 className="font-semibold"> Dherya Tailor </h1>
                <text className=" text-sm"> Username </text>
              </div>
              <div className="mx-auto">
                <a href="">
                  <h1 className="flex flex-row-reverse my-auto"> FOLLOW </h1>
                </a>
              </div>
            </div>

            <div className="flex flex-row">
              <img
                src="https://picsum.photos/50/50"
                className="rounded-full w-30 h-30"
              />
              <div className="mx-5">
                <h1 className="font-semibold"> Dherya Tailor </h1>
                <text className=" text-sm"> Username </text>
              </div>
              <div className="mx-auto">
                <a href="">
                  <h1 className="flex flex-row-reverse my-auto"> FOLLOW </h1>
                </a>
              </div>
            </div>

            <div className="flex flex-row">
              <img
                src="https://picsum.photos/50/50"
                className="rounded-full w-30 h-30"
              />
              <div className="mx-5">
                <h1 className="font-semibold"> Dherya Tailor </h1>
                <text className=" text-sm"> Username </text>
              </div>
              <div className="mx-auto">
                <a href="">
                  <h1 className="flex flex-row-reverse my-auto"> FOLLOW </h1>
                </a>
              </div>
            </div>

            <div className="flex flex-row">
              <img
                src="https://picsum.photos/50/50"
                className="rounded-full w-30 h-30"
              />
              <div className="mx-5">
                <h1 className="font-semibold"> Dherya Tailor </h1>
                <text className=" text-sm"> Username </text>
              </div>
              <div className="mx-auto">
                <a href="">
                  <h1 className="flex flex-row-reverse my-auto"> FOLLOW </h1>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuggestedFollowing;
