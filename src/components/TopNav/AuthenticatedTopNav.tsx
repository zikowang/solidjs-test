/** @format */

import { NavLink, useNavigate } from "solid-app-router";
import { Component } from "solid-js";
import { auth } from "../../stores/authenticationStore";

const AuthenticatedTopNav: Component = () => {
  const navigate = useNavigate();

  const onLogout = () => {
    navigate("/", { replace: true });

    auth.logout();
  };

  return (
    <div class="flex justify-between">
      <div class="flex justify-center">
        <NavLink class="px-3 py-5 hover:bg-purple-700" href="/">
          Dashboard
        </NavLink>
        <NavLink class="px-3 py-5 hover:bg-purple-700" href="/posts">
          Posts
        </NavLink>
        <NavLink class="px-3 py-5 hover:bg-purple-700" href="/profile">
          Profile
        </NavLink>
      </div>
      <div class="flex justify-center">
        <div class="p-5 bg-red-500 flex justify-center items-center rounded-full">{auth.user}</div>
        <button class="px-3 py-5 hover:bg-purple-700" onClick={onLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default AuthenticatedTopNav;
