import React from "react";
import { render, cleanup } from "@testing-library/react";
import configureStore from "redux-mock-store";
import renderer from "react-test-renderer";
import SearchBarComponent from "../components/SearchBar/SearchBar";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../redux/rootReducer";
import { BrowserRouter as Router } from "react-router-dom";

afterEach(cleanup);

const store = createStore(rootReducer);

describe("Connected Redux <SearchBarComponent component>", () => {
  const component = renderer.create(
    <Router>
      <Provider store={store}>
        <SearchBarComponent />
      </Provider>
    </Router>
  );
  test("renders SearchBarComponent Component", () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
