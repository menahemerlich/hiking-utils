import { test, before, after } from "node:test"
import assert from "node:assert/strict";
import { getWeatherCategory } from "./getWeatherCategory.js";

test("getWeatherCategory freezing", ()=>{assert.equal(getWeatherCategory(-1), "freezing")})
test("getWeatherCategory cold", ()=>{assert.equal(getWeatherCategory(6), "cold")})
test("getWeatherCategory cool", ()=>{assert.equal(getWeatherCategory(25), "cool")})
test("getWeatherCategory warm", ()=>{assert.equal(getWeatherCategory(32), "warm")})
test("getWeatherCategory hot", ()=>{assert.equal(getWeatherCategory(36), "hot")})
test("getWeatherCategory drope error", () => { assert.throws(() => getWeatherCategory("10")) })


