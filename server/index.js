import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import weatherRoute from "./routes/weather.js";
import newsRoute from "./routes/news.js";
import currencyRoute from "./routes/currency.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/weather", weatherRoute);
app.use("/api/news", newsRoute);
app.use("/api/currency", currencyRoute);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
