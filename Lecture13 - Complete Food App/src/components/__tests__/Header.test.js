import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render Header Component with a Login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // Way to Find Button
  //   const loginButton = screen.getByRole("button");
  //   expect(loginButton).toBeInTheDocument();

  // Another Way to Find Login Button
  //   const loginButton = screen.getByText("Login");
  //   expect(loginButton).toBeInTheDocument();

  // Way to Find Specific Button using some filter
  const loginButton = screen.getByRole("button", { name: "Login" });
  expect(loginButton).toBeInTheDocument();
});

it("Should render Header Component with a Cart Item 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText("🛒 0");
  expect(cartItems).toBeInTheDocument();
});

it("Should Check my Cart Item is their or Not", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // This is Regex
  const cartItems = screen.getByText(/🛒/);
  expect(cartItems).toBeInTheDocument();
});

it("Should Change my Login Button to Logout on Click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });
  // Clicked on Login Button It should change to Logout Button
  fireEvent.click(loginButton)
  // Check the Button is Logout or not in the Screen
  const logoutButton = screen.getByRole("button", { name: "Logout" });
  expect(logoutButton).toBeInTheDocument();
});
