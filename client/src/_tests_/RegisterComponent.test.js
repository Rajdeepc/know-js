import React from "react";
import { render, cleanup } from "@testing-library/react";
import configureStore from "redux-mock-store";
import renderer from "react-test-renderer";
import RegisterConnectedComponent from "../components/Register/RegisterComponent";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../redux/rootReducer";
import { BrowserRouter as Router } from "react-router-dom";

afterEach(cleanup);

const store = createStore(rootReducer);

describe("Connected Redux <RegisterConnectedComponent component>", () => {
  const component = renderer.create(
    <Router>
      <Provider store={store}>
        <RegisterConnectedComponent />
      </Provider>
    </Router>
  );
  test("renders RegisterConnectedComponent Component", () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
