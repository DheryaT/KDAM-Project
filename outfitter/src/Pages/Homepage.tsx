import React from "react";
import Nav from "../components/Nav";
import { Outlet, Route, Routes } from "react-router-dom";
import Feed from "../components/Feed";
import ControlBar from "../components/ControlBar";
import SuggestedFollowing from "../components/SuggestedFollowing";
import SavedImages from "../components/SavedImages";

const Homepage = () => {
  return (
    <>
      <div className="flex flex-row h-full w-full">
        <div>
          <Nav />
          <Outlet />
        </div>

        <div className="flex flex-col w-3/5 bg-green-300">
          <div>
            <h1 className="text-center m-8"> STORIES </h1>
          </div>
          <div className="">
            <Feed />
          </div>
        </div>

        <div className="flex flex-col pl-5">
          <div>
            <ControlBar />
          </div>
          <div className="h-full">
            <SuggestedFollowing />
            <SavedImages />
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
