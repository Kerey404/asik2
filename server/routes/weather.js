import express from "express";
import { getWeather } from "../services/openWeather.js";

const router = express.Router();

router.get("/", async (req, res) => {
    const { city } = req.query;
    if (!city) return res.status(400).json({ error: "City required" });

    try {
        const data = await getWeather(city);
        res.status(200).json(data);
    } catch {
        res.status(404).json({ error: "City not found" });
    }
});

export default router;
