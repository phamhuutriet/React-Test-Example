import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import IncreaseButton from "./IncreaseButton";

let container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("Counter when initialize return 0", () => {
  act(() => {
    render(<IncreaseButton />, container);
  });
  let countText = container.querySelector("[data-testid=counter]").innerHTML;

  expect(countText).toBe("Counter: 0");
});

it("Counter when click 1 return 1", () => {
  act(() => {
    render(<IncreaseButton />, container);
  });
  let button = container.querySelector("[data-testid=button]");

  act(() => {
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  let countText = container.querySelector("[data-testid=counter]").textContent;
  expect(countText).toBe("Counter: 1");
});

it("Counter when click 5 return 5", () => {
  act(() => {
    render(<IncreaseButton />, container);
  });
  let button = container.querySelector("[data-testid=button]");

  act(() => {
    for (let i = 0; i < 5; i++) {
      button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    }
  });

  let countText = container.querySelector("[data-testid=counter]").innerHTML;
  expect(countText).toBe("Counter: 5");
});
