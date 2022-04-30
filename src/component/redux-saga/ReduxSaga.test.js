import { incrementAsync, delay } from "./CounterSaga";
import { call, put } from "redux-saga/effects";

it("incrementAsync when call 1 time return delay call", () => {
  const generator = incrementAsync();

  const calledFunction = generator.next().value;

  expect(calledFunction).toStrictEqual(call(delay, 1000));
});

it("incrementAsync when call 2 times return dispatch call", () => {
  const generator = incrementAsync();

  generator.next();
  const calledFunction = generator.next().value;

  expect(calledFunction).toStrictEqual(put({ type: "INCREMENT" }));
});

it("increment Async when call 3 times return done", () => {
  const generator = incrementAsync();

  generator.next();
  generator.next();
  const doneObject = generator.next();

  expect(doneObject).toStrictEqual({ done: true, value: undefined });
});
