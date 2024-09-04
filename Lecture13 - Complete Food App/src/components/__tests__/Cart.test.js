import { act, fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import { Provider } from "react-redux";
import MOCK_DATA from "./mocks/mockResMenu.json";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"
import Cart from "../Cart";
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("Should Load Restaurant Menu Component", async () => {
  // Will have to use Fetch to make call
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );
  // Now we need to click on the Pannel
  const accordianHeader = screen.getByText("Desserts & Cupcakes (9)");
  fireEvent.click(accordianHeader);

  expect(screen.getAllByTestId("foodItems").length).toBe(67);

  const addBtns = screen.getAllByRole("button", { name: "Add +" });
  // console.log(addBtns.length)
  // Click on First Button
  fireEvent.click(addBtns[0]);
  // After Button Click then Cart Item Must be 1
  expect(screen.getByText("🛒 1")).toBeInTheDocument();
  fireEvent.click(addBtns[2]);
  expect(screen.getByText("🛒 2")).toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", {name: "Clear Cart"}));
  expect(screen.getByText("Your Cart is Empty")).toBeInTheDocument();
});
