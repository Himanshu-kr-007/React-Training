import "@testing-library/jest-dom";
import Body from "../Body";
import { fireEvent, render, screen } from "@testing-library/react";
import MOCK_DATA from "./mocks/mockResListData.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
// We need to make fetch function exactly like similar to fetch function as our browser gives us
global.fetch = jest.fn(() => {
  // Fetch function return a promise and we need to make it identical similar how the fetch function works
  return Promise.resolve({
    // Promise function resolve a json
    json: () => {
      // json return a promise.resolve which is actually having data
      return Promise.resolve(MOCK_DATA);
      // We can not make an Actual Call to network. This is running on JSDOM which is like a browser environment. Even though we don't require network connectivity to run the test cases
    },
  });
});

it("Should Search ResList for burger Text Input with Search Button", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  // Now I want Check Initially My Card Length is 20 and when the Fireevent will click the Search bn then it should change to 2
  const CardBeforeSearch = screen.getAllByTestId("resCard");
  expect(CardBeforeSearch.length).toBe(20);

  const searchBtn = screen.getByRole("button", { name: "🔍" });
  expect(searchBtn).toBeInTheDocument();
  // If we don't have any thing common or not having any role, label then we can use getByTestId Now we can have got SearchInput.
  const searchInput = screen.getByTestId("SearchInput");
  // Now we want to trigger a fireEvent on change and we want to take SearchInput and this Input take a target as fake input and added the value burger
  fireEvent.change(searchInput, { target: { value: "burger" } });
  // Now I want to click on Search Button.
  fireEvent.click(searchBtn);
  // Now I want screen should load 2 Cards and In HTML RestaurantCard is a div. For component like this we can give test-id. In RestaurantCard.js give the Test id- data-testid="resCard"
  // Give me all the Element which have resCard
  const cardsAfterSearch = screen.getAllByTestId("resCard");
  // Now It should have 2 Cards
  expect(cardsAfterSearch.length).toBe(2);
});

it("Should Filter Top Rated Restaurant", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const topRatedBtn = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });
  fireEvent.click(topRatedBtn);
  const cardAfterFilter = screen.getAllByTestId("resCard");
  expect(cardAfterFilter.length).toBe(13);
});

