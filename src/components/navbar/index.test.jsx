import { screen, render } from "@testing-library/react";

import Navbar from ".";

describe("<Navbar/> Should render", () => {
  const { baseElement } = render(<Navbar />);
  it("should render navbar", () => {
    expect(screen.findByDisplayValue("navbar"));
  });
});
