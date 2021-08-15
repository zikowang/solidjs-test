/** @format */

import { Component } from "solid-js";
import { Routes, Route } from "solid-app-router";

import Home from "../screens/Home/Home";
import UnauthenticatedTopNav from "../components/TopNav/UnauthenticatedTopNav";

const UnauthenticatedRouter: Component = () => {
  return (
    <>
      <UnauthenticatedTopNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
};

export default UnauthenticatedRouter;
