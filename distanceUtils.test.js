import { kmToMeters, caloriesBurned } from "./distanceUtils.js";
import { test, before, after } from "node:test"
import assert from "node:assert/strict";
import { app } from "./server.js";

test("kmToMeters function test", () => { assert.equal(kmToMeters(1), 1000) })
test("kmToMeters function test drope error", () => { assert.throws(() => kmToMeters("1")) })
test("kmToMeters function test drope error", () => { assert.throws(() => kmToMeters(0)) })

test("caloriesBurned function test", () => { assert.equal(caloriesBurned(70, 5), 362.6) })
test("caloriesBurned function test", () => { assert.equal(caloriesBurned(80, 3.5), 290.08) })
test("caloriesBurned function test drope error", () => { assert.throws(() => caloriesBurned(70, "5")) })
test("caloriesBurned function test drope error", () => { assert.throws(() => caloriesBurned("70", 5)) })
test("caloriesBurned function test drope error", () => { assert.throws(() => caloriesBurned(-70, 5)) })
test("caloriesBurned function test drope error", () => { assert.throws(() => caloriesBurned(70, 0)) })

let listen
before(() => {
    listen = app.listen(3000);
});

after(() => {
    listen.close();
});

test("POST test", async () => {
    assert.deepEqual(
    await fetch("http://localhost:3000/check-weather", {
        method: "POST", 
        headers: { 
            "Content-type": "application/json" 
        },
        body: JSON.stringify({ 
            "temperature": 25, 
            "windSpeed": 12 
        })
    }).then((data) => data.json()),
    { "safe": true, "message": "All conditions are good for hiking!" })
})

test("POST test", async () => {
    assert.deepEqual(
    await fetch("http://localhost:3000/check-weather", {
        method: "POST", 
        headers: { 
            "Content-type": "application/json" 
        },
        body: JSON.stringify({ 
            "temperature": 45, 
            "windSpeed": 12 
        })
    }).then((data) => data.json()),
    { "safe": false, "message": "Too windy to hike!" })
})

test("POST test missing data", async () => {
    assert.deepEqual(
    await fetch("http://localhost:3000/check-weather", {
        method: "POST", 
        headers: { 
            "Content-type": "application/json" 
        },
        body: JSON.stringify({ 
            "temperature": 25
        })
    }).then((data) => data.text()),
     "missing data" )
})

test("POST test invalid number", async () => {
    assert.deepEqual(
    await fetch("http://localhost:3000/check-weather", {
        method: "POST", 
        headers: { 
            "Content-type": "application/json" 
        },
        body: JSON.stringify({ 
            "temperature": 25, 
            "windSpeed": "12" 
        })
    }).then((data) => data.text()),
    "invalid number")
})

test("POST test", async () => {
    assert.deepEqual(
    await fetch("http://localhost:3000/check-weather", {
        method: "POST", 
        headers: { 
            "Content-type": "application/json" 
        },
        body: JSON.stringify({ 
            "temperature": 25, 
            "windSpeed": 60
        })
    }).then((data) => data.json()),
    { "safe": true, "message": "All conditions are good for hiking!" })
})











