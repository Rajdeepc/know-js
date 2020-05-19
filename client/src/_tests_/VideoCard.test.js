import React from "react";
import { render, cleanup } from "@testing-library/react";
import configureStore from "redux-mock-store";
import renderer from "react-test-renderer";
import VideoPageComponent from "../components/VideoCard/VideoCard";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../redux/rootReducer";
import { BrowserRouter as Router } from "react-router-dom";

afterEach(cleanup);

const store = createStore(rootReducer);

const props = {
  item:{
    snippet: {
      title : '',
      thumbnails: {
        high:{
          url :''
        }
      }
    }
  },
  videoData:[]
}

describe("Connected Redux <VideoPageComponent component>", () => {
  const component = renderer.create(
    <Router>
      <Provider store={store}>
        <VideoPageComponent {...props} />
      </Provider>
    </Router>
  );
  test("renders VideoPageComponent Component", () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
