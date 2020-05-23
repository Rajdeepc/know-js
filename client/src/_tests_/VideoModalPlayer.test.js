import React from "react";
import { render, cleanup } from "@testing-library/react";
import VideoModalPlayer from "../components/VideoCardModalPlayer/VideoModalPlayer";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

const props = {
    item :{
      id: {
        videoId: ''
      },
      snippet: {
        title: '',
        description:'',
        channelId:"",
        channelTitle:'',
        publishedAt:''
      }
    }
  
};

describe("<VideoModalPlayer component>", () => {
  test("should be defined", () => {
    expect(VideoModalPlayer).toBeDefined();
  });
  test("renders VideoModalPlayer Component", () => {
    const { container, rerender } = render(<VideoModalPlayer {...props} />);
    rerender(<VideoModalPlayer {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });
  test("renders for default Props", () => {
      const { getByTestId } = render(
          <VideoModalPlayer {...props}
          />
      );
      expect(getByTestId('test-videplayer-card-wrapper')).toBeDefined();
      expect(VideoModalPlayer.defaultProps.id.videoId).toBeDefined()
  });
  //open_issues returns correctly
  test('open_issues returns correctly' , () => {
      const result = VideoModalPlayer.defaultProps.id.videoId;
      expect(result).toBe('')
  })
});
