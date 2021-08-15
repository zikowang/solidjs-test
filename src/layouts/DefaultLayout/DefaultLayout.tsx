/** @format */

import { Component } from "solid-js";

const DefaultLayout: Component = ({ children }) => {
  return <div class="flex flex-col p-10">{children}</div>;
};

export default DefaultLayout;
