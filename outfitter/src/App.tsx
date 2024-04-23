import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import { Outlet, Route, Routes } from "react-router-dom";
import Feed from "./components/Feed";
import SuggestedFollowing from "./components/SuggestedFollowing";
import SavedImages from "./components/SavedImages";
import Homepage from "./Pages/Homepage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </>
  );
}

export default App;
