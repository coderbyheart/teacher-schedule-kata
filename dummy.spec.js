import { describe, test } from "node:test";
import assert from "node:assert/strict";

describe("this is a simple test", () => {
  test("that this asserts", () => assert.equal(1, 1));
});
