/** @format */

import { Link } from "solid-app-router";
import { Component } from "solid-js";

import logo from "../../logo.svg";

import styles from "./Home.module.css";

const Home: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p class="text-blue-500">
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
    </div>
  );
};

export default Home;
