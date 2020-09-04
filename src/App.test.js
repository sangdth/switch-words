// import React from 'react';
// import { render } from '@testing-library/react';
// import App from './App';
import { switchWordsDefault, switchWordsMini } from "./lib";

test("switchWordsDefault", () => {
  expect(switchWordsDefault("Hello World")).toBe("Wello Horld");
  expect(switchWordsDefault("who are you?")).toBe("aho wre you?");
  expect(switchWordsDefault(1 + 2)).toBe("");
  expect(switchWordsDefault({ a: 1 })).toBe("");
  expect(switchWordsDefault(undefined)).toBe("");
});

test("switchWordsMini", () => {
  expect(switchWordsMini("Hello World")).toBe("Wello Horld");
  expect(switchWordsMini("who are you?")).toBe("aho wre you?");
  expect(switchWordsMini(1 + 2)).toBe("");
  expect(switchWordsMini({ a: 1 })).toBe("");
  expect(switchWordsMini(undefined)).toBe("");
});
