import React from "react";
import { render, cleanup } from "@testing-library/react";
import configureStore from "redux-mock-store";
import renderer from "react-test-renderer";
import SideBarComponent from "../components/Sidebar/Sidebar";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../redux/rootReducer";
import { BrowserRouter as Router } from "react-router-dom";

afterEach(cleanup);

const store = createStore(rootReducer);

describe("Connected Redux <SideBarComponent component>", () => {
  const component = renderer.create(
    <Router>
      <Provider store={store}>
        <SideBarComponent />
      </Provider>
    </Router>
  );
  test("renders SideBarComponent Component", () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
