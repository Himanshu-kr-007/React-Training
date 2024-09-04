import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe(" Contact Us Component Test Case", () => {

  // beforeAll(() => {
  //   console.log("Before Runnig All Test Cases");
  // })

  // beforeEach(() => {
  //   console.log("Before Running Each test Cases - we can use it For Clean Up Task ");
  // })

  // afterAll(() => {
  //   console.log("It will run - After completed all the Task");
  // })
  // afterEach(() => {
  //   console.log("After Running Each test Cases ");
  // });

  test("Should Load Contact-us Component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    // Assertion
    expect(heading).toBeInTheDocument();
  });

  test("Should Load Button Inside Contact Component", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  describe("Contact Us Component Input Button Test Cases", () => {
    test("Should Load Input Name Inside the Contact Component", () => {
      render(<Contact />);
      const LabelTextName = screen.getByLabelText("Name:");
      expect(LabelTextName).toBeInTheDocument();
    });

    it("Should Load 3 Input Boxes on the Contact Component", () => {
      render(<Contact />);
      // Querying about the Input Box
      const InputBoxes = screen.getAllByRole("textbox");
      // Assertion -> Expecting 3 Input Box
      expect(InputBoxes.length).toBe(3);
    });
  });
});
