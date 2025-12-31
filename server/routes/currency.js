import express from "express";
import { getCurrency } from "../services/currencyService.js";

const router = express.Router();

router.get("/", async (req, res) => {
    const { base } = req.query;

    if (!base) {
        return res.status(400).json({ error: "Base currency required" });
    }

    try {
        const data = await getCurrency(base);
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ error: "Currency service error" });
    }
});

export default router;
