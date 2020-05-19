import React from "react";
import { render, cleanup } from "@testing-library/react";
import GithubCard from "../components/GithubCard/GithubCard";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

const props = {
    item :{
        html_url: "",
        full_name: "",
        owner: {
          login: "",
        },
        description: "",
        stargazers_count: 0,
        open_issues_count: 0,
    }
  
};

describe("<GithubCard component>", () => {
  test("should be defined", () => {
    expect(GithubCard).toBeDefined();
  });
  test("renders GithubCard Component", () => {
    const { container, rerender } = render(<GithubCard {...props} />);
    rerender(<GithubCard {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });
  test("renders for default Props", () => {
      const { getByTestId } = render(
          <GithubCard {...props}
          />
      );
      expect(getByTestId('test-github-card-wrapper')).toBeDefined();
      expect(GithubCard.defaultProps.open_issues_count).toBeDefined()
  });
  //open_issues returns correctly
  test('open_issues returns correctly' , () => {
      const result = GithubCard.defaultProps.open_issues_count;
      expect(result).toBe(0)
  })
});
