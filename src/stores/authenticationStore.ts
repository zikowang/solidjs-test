/** @format */

import { createMutable } from "solid-js/store";

export const auth = createMutable({
  authenticated: eval(window.localStorage.getItem("authenticated")) || false,
  user: window.localStorage.getItem("user") || null,

  login() {
    this.authenticated = true;
    this.user = "John Doe";
    window.localStorage.setItem("authenticated", JSON.stringify(this.authenticated));
    window.localStorage.setItem("user", this.user);
  },

  logout() {
    this.authenticated = false;
    this.user = null;
    window.localStorage.setItem("authenticated", JSON.stringify(this.authenticated));
    window.localStorage.setItem("user", JSON.stringify(this.user));
  },
});
