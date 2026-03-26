import { describe, expect, it } from "bun:test";
import { render, screen } from "@testing-library/react";
import { Button } from "@/shared/ui/button/index";

describe("Button", () => {
  it("renders children correctly", () => {
    render(<Button>Click me</Button>);
    expect(
      screen.getByRole("button", { name: "Click me" }),
    ).toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(<Button className="custom-class">Test Button</Button>);
    expect(screen.getByRole("button")).toHaveClass("custom-class");
  });

  it("applies fullWidth class when fullWidth prop is true", () => {
    render(<Button fullWidth>Test Button</Button>);
    expect(screen.getByRole("button")).toHaveClass("w-full");
  });

  it("can be disabled", () => {
    render(<Button disabled>Test Button</Button>);
    expect(screen.getByRole("button")).toBeDisabled();
  });
});
