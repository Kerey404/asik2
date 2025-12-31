import axios from "axios";

export async function getNews(city) {
    const url = `https://newsapi.org/v2/everything?q=${city}&apiKey=${process.env.NEWS_KEY}`;

    const res = await axios.get(url);
    const articles = res.data.articles.slice(0, 5).map(a => ({
        title: a.title,
        url: a.url,
        source: a.source.name
    }));

    return { city, articles };
}
