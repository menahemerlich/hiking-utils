import express from "express"

export const app = express()

app.use(express.json())

app.post("/check-weather", async (req, res) => {
    if (!req.body || !req.body.temperature || !req.body.windSpeed) {
        return res.status(400).send("missing data");
    }
    const { temperature, windSpeed } = req.body
    if (typeof temperature !== "number" || typeof windSpeed !== "number") {
        return res.status(400).send("invalid number");
    }
    if (temperature > 0 && temperature < 35 && windSpeed <= 60) {
        res.status(200).json({
            "safe": true,
            "message": "All conditions are good for hiking!"
            }
        )
    } else {
        res.status(200).json({
            "safe": false,
            "message": "Too windy to hike!"
            }
        )
    }
})

// app.listen(3030, () => {
//     console.log("server rouning of http://localost:3030");
// })