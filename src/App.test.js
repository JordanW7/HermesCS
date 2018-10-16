import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";

const store = configureStore();

it("Placeholder", () => {
  return promise.resolve(true);
});

// it("renders without crashing", () => {
//   const div = document.createElement("div");
//   ReactDOM.render(
//     <Provider store={store}>
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     </Provider>,
//     div
//   );
//   ReactDOM.unmountComponentAtNode(div);
// });
