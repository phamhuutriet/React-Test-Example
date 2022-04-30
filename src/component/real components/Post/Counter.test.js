import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Counter from "./Counter";

describe("test Counter Component", () => {
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

  it("Counter when pass in clicked count's value return the text Clicked value times", () => {
    act(() => {
      render(<Counter clickCount={1} />, container);
    });

    const showCounterText = container.querySelector("[data-testid=showCounter]").textContent;
    expect(showCounterText).toBe("Clicked 1 times");
  });

  it("Counter's increment button when clicked 1 times return to have been called 1 times ", () => {
    const mockOnClickIncrement = jest.fn();

    act(() => {
      render(<Counter onClickIncrement={mockOnClickIncrement} />, container);
    });

    const incrementButton = container.querySelector("[data-testid=increment]");
    act(() => {
      incrementButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    expect(mockOnClickIncrement).toHaveBeenCalledTimes(1);
  });

  it("Counter's increment button when clicked 5 times return to have been called 5 times ", () => {
    const mockOnClickIncrement = jest.fn();

    act(() => {
      render(<Counter onClickIncrement={mockOnClickIncrement} />, container);
    });

    const incrementButton = container.querySelector("[data-testid=increment]");
    act(() => {
      for (let i = 0; i < 5; i++) {
        incrementButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
      }
    });

    expect(mockOnClickIncrement).toHaveBeenCalledTimes(5);
  });

  it("Counter's decrement button when clicked 1 times return to have been called 1 times ", () => {
    const mockOnClickDecrement = jest.fn();

    act(() => {
      render(<Counter onClickDecrement={mockOnClickDecrement} />, container);
    });

    const decrementButton = container.querySelector("[data-testid=decrement]");
    act(() => {
      decrementButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    expect(mockOnClickDecrement).toHaveBeenCalledTimes(1);
  });

  it("Counter's decrement button when clicked 5 times return to have been called 5 times ", () => {
    const mockOnClickDecrement = jest.fn();

    act(() => {
      render(<Counter onClickDecrement={mockOnClickDecrement} />, container);
    });

    const decrementButton = container.querySelector("[data-testid=decrement]");
    act(() => {
      for (let i = 0; i < 5; i++) {
        decrementButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
      }
    });

    expect(mockOnClickDecrement).toHaveBeenCalledTimes(5);
  });

  it("Counter's incrementAsync button when clicked 1 times return to have been called 1 times ", () => {
    const mockOnClickIncrementAsync = jest.fn();

    act(() => {
      render(<Counter onClickIncrementAsync={mockOnClickIncrementAsync} />, container);
    });

    const incrementAsyncButton = container.querySelector("[data-testid=incrementAsync]");
    act(() => {
      incrementAsyncButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    expect(mockOnClickIncrementAsync).toHaveBeenCalledTimes(1);
  });

  it("Counter's incrementAsync button when clicked 1 times return to have been called 1 times ", () => {
    const mockOnClickIncrementAsync = jest.fn();

    act(() => {
      render(<Counter onClickIncrementAsync={mockOnClickIncrementAsync} />, container);
    });

    const incrementAsyncButton = container.querySelector("[data-testid=incrementAsync]");
    act(() => {
      for (let i = 0; i < 5; i++) {
        incrementAsyncButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
      }
    });

    expect(mockOnClickIncrementAsync).toHaveBeenCalledTimes(5);
  });
});
