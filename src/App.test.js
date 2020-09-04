// import React from 'react';
// import { render } from '@testing-library/react';
// import App from './App';
import { switchWordsDefault, switchWordsMini } from "./lib";

test("switchWordsDefault", () => {
  expect(switchWordsDefault("Hello World")).toBe("Wello Horld");
  expect(switchWordsDefault("who are you?")).toBe("aho wre you?");
});

test("switchWordsMini", () => {
  expect(switchWordsMini("Hello World")).toBe("Wello Horld");
  expect(switchWordsMini("who are you?")).toBe("aho wre you?");
});
