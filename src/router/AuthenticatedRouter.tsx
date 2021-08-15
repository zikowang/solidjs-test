/** @format */

import { Component } from "solid-js";
import { Route, Routes } from "solid-app-router";

import Dashboard from "../screens/Dashboard/Dashboard";
import Profile from "../screens/Profile/Profile";
import AuthenticatedTopNav from "../components/TopNav/AuthenticatedTopNav";
import DefaultLayout from "../layouts/DefaultLayout/DefaultLayout";
import Posts from "../screens/Posts/Posts";
import Post from "../screens/Post/Post";
import Album from "../screens/Album/Album";

const AuthenticatedRouter: Component = () => {
  return (
    <>
      <AuthenticatedTopNav />
      <DefaultLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/album/:id" element={<Album />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:id" element={<Post />} />
          <Route path="*" element={<div>not found</div>} />
        </Routes>
      </DefaultLayout>
    </>
  );
};

export default AuthenticatedRouter;
