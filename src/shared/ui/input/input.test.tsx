import { describe, expect, it } from "bun:test";
import { render, screen } from "@testing-library/react";
import { Input } from "@/shared/ui/input/index";

describe("Input", () => {
  it("renders with label correctly", () => {
    render(<Input label="Email" id="email-input" />);
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("displays error message when error prop is provided", () => {
    const errorMessage = "This field is required";
    render(<Input label="Password" error={errorMessage} />);
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });

  it("renders icon when provided", () => {
    render(
      <Input
        label="Search"
        icon={<span data-testid="search-icon">Icon</span>}
      />,
    );
    expect(screen.getByTestId("search-icon")).toBeInTheDocument();
  });

  it("passes generic input props correctly", () => {
    render(<Input label="Name" placeholder="Enter your name" disabled />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveAttribute("placeholder", "Enter your name");
    expect(input).toBeDisabled();
  });
});
