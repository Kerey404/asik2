import express from "express";
import { getNews } from "../services/newsService.js";

const router = express.Router();

router.get("/", async (req, res) => {
    const { city } = req.query;
    if (!city) return res.status(400).json({ error: "City required" });

    const news = await getNews(city);
    res.json(news);
});

export default router;
