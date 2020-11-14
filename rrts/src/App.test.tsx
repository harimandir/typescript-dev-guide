import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the app container in the document", () => {
  render(<App />);
  const appContainer = screen.getByTestId("App");
  expect(appContainer).toBeInTheDocument();
});
