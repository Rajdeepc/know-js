import React from "react";
import { render, cleanup } from "@testing-library/react";
import NPMCard from "../components/NPMCard/NPMCard";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

const props = {
      package: {
        name: "",
        description: "",
        author: {
          name: "",
        },
        date: "",
        keywords: [],
        links: {
          npm: "",
        },
      }
};

describe("<NPMCard component>", () => {
  test("should be defined", () => {
    expect(NPMCard).toBeDefined();
  });
  test("renders NPMCard Component", () => {
    const { container, rerender } = render(<NPMCard item={props} />);
    rerender(<NPMCard item={props} />);
    expect(container.firstChild).toMatchSnapshot();
  });
  test("renders for default Props", () => {
      const { getByTestId } = render(
          <NPMCard item={props}
          />
      );
      expect(getByTestId('test-npmcard-card-wrapper')).toBeDefined();
      expect(NPMCard.defaultProps.package.name).toBeDefined()
  });
  //open_issues returns correctly
  test('package object returns correctly' , () => {
      const result = NPMCard.defaultProps.package.name;
      expect(result).toBe('')
  })
});
