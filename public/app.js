document.getElementById("btn").addEventListener("click", loadData);

async function loadData() {
    const city = document.getElementById("cityInput").value;


    const weather = await fetch(`/api/weather?city=${city}`).then(r => r.json());


    const news = await fetch(`/api/news?city=${city}`).then(r => r.json());

    const currency = await fetch(`/api/currency?base=USD`).then(r => r.json());

    document.getElementById("weather").innerHTML = `
    <h2>${weather.city}, ${weather.country}</h2>
    <p>${weather.description}</p>
    <p>Temp: ${weather.temperature}°C</p>
  `;

    document.getElementById("news").innerHTML =
        news.articles.map(a => `<p>${a.title}</p>`).join("");

    document.getElementById("currency").innerHTML = `
    <p>USD → KZT: ${currency.rates.KZT}</p>
  `;

    initMap(weather.coordinates.lat, weather.coordinates.lon);
}

function initMap(lat, lon) {
    const map = L.map("map").setView([lat, lon], 10);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")
        .addTo(map);

    L.marker([lat, lon]).addTo(map);
}
