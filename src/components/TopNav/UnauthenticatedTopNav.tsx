/** @format */

import { NavLink, useNavigate } from "solid-app-router";
import { Component } from "solid-js";
import { auth } from "../../stores/authenticationStore";

const UnauthenticatedTopNav: Component = () => {
  const navigate = useNavigate();

  const onLogin = () => {
    navigate("/", { replace: true });

    auth.login();
  };

  return (
    <div class="flex justify-between">
      <div class="flex justify-center">
        <NavLink class="px-3 py-5 hover:bg-purple-700" href="/">
          Home
        </NavLink>
        <NavLink class="px-3 py-5 hover:bg-purple-700" href="/">
          Pricing
        </NavLink>
        <NavLink class="px-3 py-5 hover:bg-purple-700" href="/">
          About
        </NavLink>
      </div>
      <div class="flex justify-center">
        <button class="px-3 py-5 hover:bg-purple-700" onClick={onLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default UnauthenticatedTopNav;
