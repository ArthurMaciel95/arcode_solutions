import { screen, render } from "@testing-library/react";
import AboutUs from ".";

describe("<AboutUs/> is Rendering", () => {
  it("should render heading", () => {
    const { container } = render(<AboutUs />);

    expect(
      screen.getByRole("heading", { name: /Arthur Nogueira/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: /SOBRE MIM/i }),
    ).toBeInTheDocument();
  });
});
