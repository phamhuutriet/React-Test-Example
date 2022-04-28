import axios from "axios";
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import FetchData from "./fetchData";

let container = null;
jest.mock("axios");

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("FetchData when fetching null object return loading", async () => {
  const nullObject = null;
  axios.get.mockImplementation(() => Promise.resolve({ data: nullObject }));

  await act(async () => {
    render(<FetchData />, container);
  });

  const loadingText = container.querySelector("[data-testid=loading]").textContent;

  expect(loadingText).toBe("Loading");
});

it("FetchData when fetching return object display", async () => {
  const fakeObject = {
    userId: "1",
    id: "1",
    title: "title",
    body: "body",
  };
  axios.get.mockImplementation(() => Promise.resolve({ data: fakeObject }));

  await act(async () => {
    render(<FetchData id="123" />, container);
  });

  const userIdText = container.querySelector("[data-testid=userId]").textContent;
  const idText = container.querySelector("[data-testid=id]").textContent;
  const titleText = container.querySelector("[data-testid=title]").textContent;
  const bodyText = container.querySelector("[data-testid=body]").textContent;

  expect(userIdText).toBe("1");
  expect(idText).toBe("1");
  expect(titleText).toBe("title");
  expect(bodyText).toBe("body");
});
