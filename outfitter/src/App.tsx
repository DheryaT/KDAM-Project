import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import { Outlet, Route, Routes } from "react-router-dom";
import Feed from "./components/Feed";
import Controlbar from "./components/Controlbar";
import SuggestedFollowing from "./components/SuggestedFollowing";

function App() {
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

        <div className="flex flex-col">
          <div>
            <Controlbar />
          </div>
          <div className="h-full">
            <SuggestedFollowing />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
