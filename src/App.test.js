import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";

const store = configureStore();

test("Blank unit test", () => {
  expect("3").toBe("3");
});
