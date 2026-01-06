import { test, before, after } from "node:test"
import assert from "node:assert/strict";
import { formatHikeName } from "./formatHikeName.js";

test("formatHikeName test", () => {assert.equal(formatHikeName("Forest Loop", "Galilee"), "Hike: Forest Loop (Galilee)")})
test("formatHikeName test drope error", () => { assert.throws(() => formatHikeName("Galilee")) })
test("formatHikeName test drope error", () => { assert.throws(() => formatHikeName(10, "Galilee")) })
test("formatHikeName test drope error", () => { assert.throws(() => formatHikeName(10, "Galilee")) })
