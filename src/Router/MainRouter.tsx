/** @format */

import { Component, createEffect, Show } from "solid-js";

import { auth } from "../stores/authenticationStore";
import AuthenticatedRouter from "./AuthenticatedRouter";
import UnauthenticatedRouter from "./UnauthenticatedRouter";

const MainRouter: Component = () => {
  return (
    <Show when={auth.authenticated} fallback={<UnauthenticatedRouter />}>
      {<AuthenticatedRouter />}
    </Show>
  );
};

export default MainRouter;
