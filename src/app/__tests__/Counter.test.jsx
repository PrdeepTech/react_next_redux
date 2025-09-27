import { fireEvent, screen } from "@testing-library/react";
import { render } from "../../test-utils";
import Counter from "../Components/Counter";

describe("Counter Component", () => {
  test("renders Counter component", () => {
    render(<Counter />);
    const countElement = screen.getByTestId("count");
    expect(countElement).toBeInTheDocument();
  });

  test("initial count is 0", () => {
    render(<Counter />);
    const countElement = screen.getByTestId("count");
    expect(countElement).toHaveTextContent("0");
  });

  test("increments count on button click", () => {
    render(<Counter />);
    const buttonElement = screen.getByText("Increment");
    fireEvent.click(buttonElement);
    const countElement = screen.getByTestId("count");
    expect(countElement).toHaveTextContent("1");
  });
});

