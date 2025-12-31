import axios from "axios";

export async function getCurrency(base) {
    const url = `https://v6.exchangerate-api.com/v6/${process.env.CURRENCY_KEY}/latest/${base}`;

    const response = await axios.get(url);

    return {
        base: response.data.base_code,
        rates: response.data.conversion_rates
    };
}
