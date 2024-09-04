import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import RestaurantCard, { withOpenLabel } from "../RestaurantCard";
import MOCK_DATA from "./mocks/resCardMock.json";

it("Should render RestaurantCard component with Props Data", () => {
  // Here we need to pass the ResData for that we have store our MockData inside the Folder mocks and the file name is resCardMock.json. Now ResData contain the Mock Data and we have passed the MockData in resData
  render(<RestaurantCard resData={MOCK_DATA} />);

  // Now we need to do some querry on MOCK_DATA
  const name = screen.getByText("Kwality Walls Ice Cream and More");

  // Expect the Name to be in the Document -- Assertion
  expect(name).toBeInTheDocument();
});

it("Should render RestaurantCard Component with Open Lable", () => {
  // Create a wrapped component using the withOpenLabel HOC
  const RestaurantCardWithOpenLabel = withOpenLabel(RestaurantCard);

  // Render the wrapped component with mock data
  render(<RestaurantCardWithOpenLabel resData={MOCK_DATA} />);

  // Check if the "Open" label is rendered
  const openLabel = screen.getByText("Open");

  // Assert the "Open" label is in the document
  expect(openLabel).toBeInTheDocument();
});
