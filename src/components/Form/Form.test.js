import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../../App";

describe("Alert firing", () => {
  it("Check that alert not fired with empty form", async () => {
    render(<App />);
    const alertMock = jest.spyOn(window, "alert").mockImplementation();
    const buttonElement = screen.getByRole("button");
    await userEvent.click(buttonElement);
    expect(alertMock).toHaveBeenCalledTimes(0);
  });
});
