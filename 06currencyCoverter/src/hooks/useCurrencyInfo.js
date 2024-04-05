import {useEffect, useState} from "react";

function useCurrencyInfo(currency) {
    let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data);
    }
    , [currency])
    return data;
}

export default useCurrencyInfo;